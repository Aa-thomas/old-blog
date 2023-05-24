import type { Post, Like } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { useState } from 'react';

interface PostItemProps {
	post: Post;
	likes: Number;
	key: String;
}

const PostItem = ({ post, likes }: PostItemProps) => {
	// const prisma = new PrismaClient();
	// const [likeCount, setLikeCount] = useState<String>('0');

	// calculate word count and read time
	const wordCount = post?.content.trim().split(/\s+/g).length;
	const minutesToRead = (wordCount / 100 + 1).toFixed(0);

	// get the date the post was created
	const postedAt = new Date(post.createdAt);

	// get the number of likes for the post
	// async () => {
	// 	const likes: Like[] = await prisma.like.findMany({
	// 		where: { postId: post.id },
	// 	});
	// 	setLikeCount(likes.length.toString());
	// };

	return (
		<div>
			<h2>{post.title}</h2>
			<h3>By {post.authorId}</h3>
			<p>{post.content}</p>
			<footer>
				<span>Posted: {postedAt.toLocaleDateString()}</span>
				<span>
					{wordCount} words. {minutesToRead} min read
				</span>
				<span>{likes.toString()} Likes</span>
			</footer>
		</div>
	);
};

export default PostItem;
