import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';
import { useUser } from '@auth0/nextjs-auth0/client';

const NavBar = ({}) => {
	const { user } = useUser();
	console.log(user);

	return (
		<nav>
			<ul>
				<li>
					<Link href="/">
						<button>Feed</button>
					</Link>
				</li>

				{/* User is signed in and has username */}
				{user && (
					<>
						<li>
							<Link href="/admin">
								<button>Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${user?.name}`}>
								<img
									src={
										user?.picture
											? user?.picture
											: `https://api.dicebear.com/6.x/initials/svg?seed=${user?.name}&radius=50`
									}
									alt="user avatar"
									className={styles.avatar}
								/>
							</Link>
						</li>
						<li>
							<Link href="/api/auth/logout">Logout</Link>
						</li>

						<p>Welcome, {user?.name} !</p>
					</>
				)}

				{/* User is not signed in */}
				{!user && (
					<li>
						<Link href="/api/auth/login">Login</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
