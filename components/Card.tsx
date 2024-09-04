'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function Card() {
	return (
		<motion.div
			initial={{ x: 200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ ease: 'easeOut', duration: 0.5 }}>
			<p>Ceci est une card animée !</p>
		</motion.div>
	);
}
