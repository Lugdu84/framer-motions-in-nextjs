'use client';

import { useState } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import { Grip, Trash2 } from 'lucide-react';
import GridIcon from '@/components/GridIcon';

export default function ReorderPage() {
	const dragControls = useDragControls();
	const [list, setList] = useState([
		'Apprendre React',
		'Apprendre Next.js',
		'Apprendre Supabase',
		'Apprendre Framer Motion',
	]);

	const handleDelete = (item: string) => {
		const newList = list.filter((i) => i !== item);
		setList(newList);
	};
	return (
		<div className="flex w-full justify-center">
			<Reorder.Group
				axis="y"
				values={list}
				onReorder={setList}
				className="flex flex-col gap-2 w-full md:w-2/3 lg:w-1/2">
				{list.map((item) => (
					<Reorder.Item
						// className="hover:cursor-grab"
						// initial={{ opacity: 0 }}
						// animate={{ opacity: 1 }}
						// exit={{ opacity: 0 }}
						// transition={{ duration: 0.5 }}
						id={item}
						dragListener={false}
						dragControls={dragControls}
						key={item}
						className="border shadow-xl p-2 bg-gray-500 rounded-lg flex justify-between"
						value={item}>
						<span className="select-none">{item}</span>

						<div className="flex gap-2">
							<GridIcon dragControls={dragControls} />
							<Trash2
								color="red"
								onClick={() => handleDelete(item)}
							/>
						</div>
					</Reorder.Item>
				))}
			</Reorder.Group>
		</div>
	);
}
