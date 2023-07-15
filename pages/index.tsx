import { FunctionComponent } from 'react';
import { CreatePost } from '../components/CreatePost';
import { PrismaClient } from '@prisma/client';
import superjson from 'superjson';

const prisma = new PrismaClient();

export const getStaticProps = async () => {
	const posts = await prisma.post.findMany();

	return {
		props: { posts },
	};
};

const Home: FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
	console.log('posts', posts);

	return (
		<>
			<main className="w-90 max-w-1200 flex flex-col justify-center items-center">
				<h1 className="flex flex-col justify-center items-center mb-10">
					TomasAI - Homepage
				</h1>
				{posts.map((post) => (
					<>
						<h2>{post.title}</h2>
						<h2>{post.content}</h2>
					</>
				))}

				<CreatePost />
			</main>
		</>
	);
};

export default Home;
