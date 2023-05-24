import { useSession } from 'next-auth/react';

const UserProfile = ({}) => {
	const { data: session } = useSession();
	const user = session?.user;

	return (
		<div className="flex flex-col justify-center mt-10">
			{user?.image && (
				<img
					src={user?.image}
					alt="user profile"
					className="h-16 w-16 rounded-full mx-auto"
				/>
			)}
			<p className="py-5">{user?.name}</p>
		</div>
	);
};

export default UserProfile;
