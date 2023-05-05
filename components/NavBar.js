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
							<Link href={`/${session.user.email}`}>
								{/* add user photo */}
								{/* <img src={} /> */}
							</Link>
						</li>
					</>
				)}

				{/* User is not signed in */}
				{!session && (
					<li>
						<Link href="/enter">
							<button>Log in</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
