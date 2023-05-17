import { useSession } from 'next-auth/react';
import Image from 'next/image';

const UserProfile = ({}) => {
	const { data: session } = useSession();
	const user = session?.user;

	return (
		<div className="flex flex-col justify-center mt-10">
			<img src={user?.image} />
			<p className="py-5">{user?.name}</p>
		</div>
	);
};

export default UserProfile;
