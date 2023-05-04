import { useSession, signIn, signOut } from 'next-auth/react';

const login = () => {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<div>Welcome, {session.user.email}! You are signed in!</div>
				<button onClick={() => signOut()}>Sign Out</button>
			</>
		);
	} else {
		return (
			<div>
				Not signed in <br />
				<button onClick={() => signIn()}>Sign in</button>
			</div>
		);
	}
};

export default login;
