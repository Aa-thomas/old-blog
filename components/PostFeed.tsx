import { useSession } from 'next-auth/react';

const PostFeed = ({}) => {
	const { data: session } = useSession();

	return (
		<>
			<div>postfeed</div>
		</>
	);
};

export default PostFeed;
