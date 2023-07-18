import { PrismaClient } from '@prisma/client';
import { FunctionComponent, useState } from 'react';

export type PostItemProps = {
	post: Post;
	likes: Like[];
	key: String;
};

export const PostItem: FunctionComponent<PostItemProps> = ({ post, likes }) => {
	const wordCount = post?.content.trim().split(/\s+/g).length;
	const minutesToRead = (wordCount / 100 + 1).toFixed(0);
	const postedAt = new Date(post.createdAt);

	return (
		<div>
			<h2>{post.title}</h2>
			<h3>By {post.author.name}</h3>

			<p>{post.content}</p>

			<p>{post.comments[0].message}</p>
			<footer>
				<span>Posted: {postedAt.toLocaleDateString()}</span>
				<span>
					{wordCount} words. {minutesToRead} min read
				</span>
				<span>{likes.length} Likes</span>
			</footer>
		</div>
	);
};
