import PostFeed from '@components/PostFeed';
import UserProfile from '@components/UserProfile';

const UserProfilePage = ({ user, posts }) => {
	return (
		<main className="wrapper flex flex-col items-center">
			<UserProfile user={user} />
			<PostFeed posts={posts} />
		</main>
	);
};

export default UserProfilePage;
