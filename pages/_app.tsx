import { Toaster } from 'react-hot-toast';
import NavBar from '../components/NavBar';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';

export default function App(
	{ Component, pageProps }: AppProps,
	session: Session
) {
	return (
		<>
			<Head>
				<title>TomasAI</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SessionProvider session={session}>
				<NavBar />
				<Component {...pageProps} />
				<Toaster />
			</SessionProvider>
		</>
	);
}
