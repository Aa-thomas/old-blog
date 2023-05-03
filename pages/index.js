import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<>
			<Head>
				<title>TomasAI - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1> TomasAI - Homepage </h1>
				<NavBar />
			</main>
		</>
	);
}
