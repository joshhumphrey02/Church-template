import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface LessonProps {
	data: {
		id: number;
		title: string;
		description: string;
		image: string;
	};
}

function Lesson({ data }: LessonProps) {
	const imageRef = useRef<HTMLImageElement>(null);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!imageRef?.current || !divRef?.current) return;
		gsap.fromTo(
			imageRef.current,
			data.id % 2 === 0
				? { opacity: 0, x: '-100%' }
				: { opacity: 0, x: '100%' },
			{
				opacity: 1,
				x: 0,
				duration: 8,
				scrollTrigger: {
					trigger: imageRef.current,
					start: 'top bottom',
					end: 'bottom center',
					scrub: true,
				},
			}
		);
		gsap.fromTo(
			divRef.current,
			data.id % 2 !== 0
				? { opacity: 0, x: '-100%' }
				: { opacity: 0, x: '100%' },
			{
				opacity: 1,
				x: 0,
				duration: 8,
				scrollTrigger: {
					trigger: divRef.current,
					start: 'top bottom',
					end: 'bottom center',
					scrub: true,
				},
			}
		);
	}, [data.id]);
	return (
		<div
			className={cn(
				'px-2 md:px-32 py-6 md:py-10 flex md:justify-between flex-col md:flex-row gap-6 md:gap-10 items-center',
				data.id % 2 !== 0
					? 'bg-[#f8f1ee]'
					: 'bg-white  flex-col-reverse md:flex-row-reverse'
			)}>
			<div ref={divRef} className="flex-1 px-2 space-y-2">
				<h2 className="text-xl md:text-2xl relative">{data.title}</h2>
				<p className="text-sm">{data.description}</p>
				<Button
					variant="link"
					className="flex text-destructive px-0 font-RobotoBold">
					View More <ChevronRight className="w-4 h-4 ml-2" />
				</Button>
			</div>
			<div className="flex-1">
				<img
					ref={imageRef}
					className={cn(
						'w-full md:w-[80%] min-h-52 object-cover rounded-lg ',
						data.id % 2 !== 0 ? 'ml-auto' : 'mr-auto'
					)}
					src={data.image}
					alt={data.title}
				/>
			</div>
		</div>
	);
}

export default Lesson;
