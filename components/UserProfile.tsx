import { useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';

export const UserProfile: FunctionComponent = () => {
	const { data: session } = useSession();
	const user = session?.user;

	return (
		<div className="mt-10 flex flex-col justify-center">
			{user?.image && (
				<img
					src={user?.image}
					alt="user profile"
					className="mx-auto h-16 w-16 rounded-full"
				/>
			)}
			<p className="py-5">{user?.name}</p>
		</div>
	);
};
