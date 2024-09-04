import Link from 'next/link';

export default function NavBar() {
	return (
		<div className="flex gap-2 p-4 justify-end">
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
			<Link href="/reorder">Reorder</Link>
		</div>
	);
}
