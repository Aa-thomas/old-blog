/**
 * Model User
 *
 */
interface User {
	id: string;
	name: string | null;
	email: string | null;
	emailVerified: Date | null;
	image: string | null;
	isAdmin: boolean;
	accounts: Account[];
	sessions: Session[];
	posts: Post[];
	comments: Comment[];
	likes: Like[];
}

/**
 * Model Post
 *
 */
interface Post {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	title: string;
	content: string;
	published: boolean;
	authorId: string;
	author: User;
	comments: Comment[];
	likes: Like[];
}

/**
 * Model Comment
 *
 */
interface Comment {
	id: string;
	message: string;
	createdAt: Date;
	updatedAt: Date;
	authorId: string;
	postId: string;
	parentId: string | null;
	author: User;
	post: Post;
	parent: Comment | null;
	children: Comment[];
	likes: Like[];
}

/**
 * Model Like
 *
 */
interface Like {
	id: string;
	userId: string;
	commentId: string | null;
	postId: string | null;
	comment: Comment | null;
	post: Post | null;
}

/**
 * Model Account
 *
 */
interface Account {
	id: string;
	userId: string;
	type: string;
	provider: string;
	providerAccountId: string;
	refresh_token: string | null;
	access_token: string | null;
	expires_at: number | null;
	token_type: string | null;
	scope: string | null;
	id_token: string | null;
	session_state: string | null;
	user: User;
}

/**
 * Model Session
 *
 */
interface Session {
	id: string;
	sessionToken: string;
	userId: string;
	expires: Date;
	user: User;
}

/**
 * Model VerificationToken
 *
 */
interface VerificationToken {
	identifier: string;
	token: string;
	expires: Date;
}
