import { FunctionComponent } from 'react';
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
			<main className="w-90 max-w-1200 flex flex-col items-center justify-center">
				<h1 className="mb-10 flex flex-col items-center justify-center">
					TomasAI - Homepage
				</h1>
			</main>
		</>
	);
};

export default Home;
