import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
interface SubscriptionCardProps {
	data: {
		id: number;
		duration: string;
		durationDes: string;
		price: string;
		features: string[];
		desc: string;
	};
}

const SubscriptionCard = ({ data }: SubscriptionCardProps) => {
	const localRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (localRef.current) {
			gsap.fromTo(
				localRef.current,
				{ scale: 0.5, opacity: 0 },
				{
					scale: 1,
					opacity: 1,
					duration: 3,
					scrollTrigger: {
						trigger: localRef.current,
						start: 'top bottom',
						end: 'bottom center',
						scrub: true,
					},
				}
			);
		}
	}, [data.id]);
	return (
		<div
			ref={localRef}
			className="bg-white shadow-md w-full text-[#412123] rounded-md px-4 py-3 pb-8 space-y-4">
			<div className=" border-b border-gray-300 pb-2 space-y-3">
				<div className=" text-center">
					<h4 className="text-base">{data.duration}</h4>
					<p className="text-xs">{data.durationDes}</p>
				</div>
				<div className="flex flex-col mx-auto text-center">
					<h1 className="text-3xl">{data.price}</h1>
					<span>per month</span>
				</div>
			</div>
			<div className="space-y-2">
				<h4>Features</h4>
				<ul className="flex flex-col space-y-3">
					{data.features.map((f, i) => (
						<li key={i} className="flex items-center text-sm">
							{' '}
							<Check className="w-4 h-4 mr-2" /> {f}
						</li>
					))}
				</ul>
			</div>
			<Button className="w-full bg-[#791400]">Subcribe</Button>
		</div>
	);
};

export default SubscriptionCard;
