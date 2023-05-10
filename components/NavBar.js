import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

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
									src={session.user.image}
									alt={`link to the profile of ${session.user.name} `}
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
