import { Grip } from 'lucide-react';
import { DragControls } from 'framer-motion';

type GridIconProps = {
	dragControls: DragControls;
};

export default function GridIcon({ dragControls }: GridIconProps) {
	const handleDragStart = (event: React.PointerEvent) => {
		event.preventDefault();
		dragControls.start(event);
		event.preventDefault();
	};
	return (
		<Grip
			onPointerDown={handleDragStart}
			className="cursor-grab"
		/>
	);
}
