import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from './components/NavBar/NavBar';
import AuthProvider from './components/Auth/AuthProvider';
import type { Session } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'TomasAI - Blog',
	description: 'Blog',
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<NavBar />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
