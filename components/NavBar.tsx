import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FunctionComponent } from 'react';

export const NavBar: FunctionComponent = () => {
	const { data: session } = useSession();

	return (
		<nav className="wrapper flex justify-between">
			<Link href="/">
				<button>Feed</button>
			</Link>

			<div className="flex items-center space-x-5">
				{/* User is signed in and has username */}
				{session && (
					<>
						<Link href="/blog/admin" className="rounded bg-blue-600">
							<button>Write Posts</button>
						</Link>
						<Link href={`/blog/${session.user?.name}`}>
							<img
								src={
									session.user?.image
										? session.user.image
										: `https://api.dicebear.com/6.x/initials/svg?seed=${session.user?.name}&radius=50`
								}
								alt="user avatar"
								className={styles.avatar}
							/>
						</Link>
						<button onClick={() => signOut()}>Logout</button>
					</>
				)}

				{/* User is not signed in */}
				{!session && <button onClick={() => signIn()}>Login</button>}
			</div>
		</nav>
	);
};

export default NavBar;
