import { Toaster } from 'react-hot-toast';
import NavBar from '../components/NavBar';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.scss';

export default function App({ Component, pageProps, session }) {
	return (
		<>
			<Head>
				<title>TomasAI</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SessionProvider>
				<NavBar />
				<Component {...pageProps} />;
				<Toaster />
			</SessionProvider>
		</>
	);
}
