import { Toaster } from 'react-hot-toast';
import NavBar from '../components/NavBar';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../styles/globals.scss';

export default function App({ Component, pageProps, session }) {
	return (
		<>
			<UserProvider>
				<NavBar />
				<Component {...pageProps} />;
				<Toaster />
			</UserProvider>
		</>
	);
}
