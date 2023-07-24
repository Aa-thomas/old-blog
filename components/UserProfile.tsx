import { useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
import { FunctionComponent } from 'react';

export const UserProfile: FunctionComponent = () => {
export const UserProfile: FunctionComponent = () => {
	const { data: session } = useSession();
	const user = session?.user;
	const user = session?.user;

	return (
		<div className="flex flex-col justify-center mt-10">
			{user?.image && (
				<img
					src={user?.image}
					alt="user profile"
					className="w-16 h-16 mx-auto rounded-full"
				/>
			)}
			<p className="py-5">{user?.name}</p>
		</div>
	);
};
