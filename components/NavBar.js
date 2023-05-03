import Link from 'next/link';

const NavBar = ({}) => {
	const { user, username } = {};

	return (
		<nav>
			<ul>
				<li>
					<Link href="/">
						<button>Feed</button>
					</Link>
				</li>

				{/* User is signed in and has username */}
				{username && (
					<>
						<li>
							<Link href="/admin">
								<button>Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`}>
								<img src={user?.photoURL} />
							</Link>
						</li>
					</>
				)}

				{/* User is not signed in */}
				{!username && (
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
