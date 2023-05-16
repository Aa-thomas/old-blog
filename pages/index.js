import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<h1 className="text-xl md:text-4xl"> TomasAI - Homepage </h1>
			</main>
		</>
	);
}
