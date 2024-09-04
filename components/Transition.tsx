'use client';
import { motion } from 'framer-motion';

export default function Transition({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: 'easeOut', duration: 1.5 }}>
			{children}
		</motion.div>
	);
}
