import { useSession } from 'next-auth/react';
import { PostItem } from './PostItem';
import { FunctionComponent } from 'react';

export type PostFeedProps = {
	posts: Post[];
};

export const PostFeed: FunctionComponent<PostFeedProps> = ({ posts }) => {
	console.log('PostFeed', posts.length);

	return (
		<div>
			{posts.length > 0 ? (
				posts.map((post) => (
					<PostItem key={post.id} post={post} likes={post.likes} />
				))
			) : (
				<p>No posts to display</p>
			)}
		</div>
	);
};

export default PostFeed;

// convert posts into postItem type and pass to post item component
