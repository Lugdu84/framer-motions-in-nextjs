import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Transition from '@/components/Transition';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				<main>
					{/* <Transition>{children}</Transition> */}
					{children}
				</main>
			</body>
		</html>
	);
}
