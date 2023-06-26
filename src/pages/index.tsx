import Head from 'next/head'
import { Inter } from 'next/font/google'
import SplashTemplate from '@/features/splash/components/template/SplashTemplate'

const inter = Inter({ subsets: ['latin'] })

export default function Splash() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<SplashTemplate />
			</main>
		</>
	)
}
