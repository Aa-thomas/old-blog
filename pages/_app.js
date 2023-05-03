import { Toaster } from 'react-hot-toast';
import NavBar from '../components/NavBar';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />;
			<Toaster />
		</>
	);
}
