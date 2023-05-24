import PostFeed from '../../../components/PostFeed';
import UserProfile from '../../../components/UserProfile';
import { useSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import type { Post } from '@prisma/client';

interface UserProfilePageProps {
	posts: Post[];
}

const UserProfilePage = ({ posts }: UserProfilePageProps) => {
	const { data: session } = useSession();
	const authUser = session?.user;

	console.log('UserProfilePage', posts.length);

	return (
		<main className="wrapper flex flex-col items-center">
			{/* <UserProfile user={user} /> */}
			<PostFeed posts={posts} />
		</main>
	);
};

export const getServerSideProps = async () => {
	const prisma = new PrismaClient();

	// get posts from database
	const posts = await prisma.post.findMany({
		include: {
			author: true,
			likes: true,
			comments: true,
		},
	});

	return { props: { posts } };
};

export default UserProfilePage;
