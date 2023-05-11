import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/NavBar.module.scss';

const NavBar = ({}) => {
	const { data: session } = useSession();

	return (
		<nav>
			<ul>
				<li>
					<Link href="/">
						<button>Feed</button>
					</Link>
				</li>

				{/* User is signed in and has username */}
				{session && (
					<>
						<li>
							<Link href="/admin">
								<button>Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${session.user.name}`}>
								<img
									src={
										session.user.image
											? session.user.image
											: `https://api.dicebear.com/6.x/initials/svg?seed=${session.user.name}&radius=50`
									}
									alt="user avatar"
									className={styles.avatar}
								/>
							</Link>
						</li>
						<li>
							<button onClick={() => signOut()}>Sign out</button>
						</li>
						{console.log(session.user)}

						<p>Welcome, {session.user.name} !</p>
					</>
				)}

				{/* User is not signed in */}
				{!session && (
					<li>
						<Link href="/enter">
							<button onClick={() => signIn()}>Log in</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
