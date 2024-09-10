import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Header from '../header';
import { Button } from '../ui/button';
import { Element } from 'react-scroll';

function Hero() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = ['/images/img2.jpg', '/images/img3.jpeg', '/images/img4.jpeg'];
	const imageRefs = useRef<HTMLDivElement[]>([]);
	const textRef = useRef<HTMLDivElement>(null);
	const hasAnimatedText = useRef(false);

	useEffect(() => {
		if (!hasAnimatedText.current) {
			gsap.fromTo(
				textRef.current,
				{
					opacity: 0,
					y: 100,
				},
				{ y: 0, opacity: 1, duration: 5, ease: 'power3.out' }
			);
			hasAnimatedText.current = true;
		}
		const animateImages = () => {
			const currentImageRef = imageRefs.current[currentImageIndex];
			const nextImageIndex = (currentImageIndex + 1) % images.length;
			const nextImageRef = imageRefs.current[nextImageIndex];
			gsap.to(currentImageRef, {
				duration: 4,
				scale: 0.5,
				opacity: 0,
				transformOrigin: 'center',
				ease: 'power3.inOut',
				onComplete: () => {
					gsap.set(currentImageRef, { display: 'none' });
				},
			});
			gsap.set(nextImageRef, {
				display: 'block',
				scale: 0.5,
				opacity: 0,
				transformOrigin: 'center',
			});
			gsap.to(nextImageRef, {
				duration: 4,
				scale: 1,
				opacity: 1,
				ease: 'power3.inOut',
			});

			setCurrentImageIndex(nextImageIndex);
		};
		const interval = setInterval(() => {
			animateImages();
		}, 8000);

		return () => clearInterval(interval);
	}, [currentImageIndex, images.length]);

	return (
		<Element name="about" className="relative flex flex-col h-screen bg-black">
			<div className="absolute w-full h-full top-0 left-0">
				{images.map((image, index) => (
					<div
						key={index}
						ref={(el) => (imageRefs.current[index] = el!)}
						style={{
							backgroundImage: `url('${image}')`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							display: index === 0 ? 'block' : 'none',
						}}
						className="absolute w-full h-full"
					/>
				))}
			</div>
			<div
				ref={textRef}
				className="relative z-10 flex-1 px-4 md:px-32 flex flex-col justify-center items-center text-white space-y-6">
				<Header />
				<div className="flex-1 flex flex-col justify-center items-center space-y-4 md:space-y-6">
					<h1 className="text-2xl md:text-5xl md:leading-[4rem]">
						Where Godly Minds Converge <br /> & Kingdom Leader Emerge
					</h1>
					<p className="text-base font-semibold capitalize">
						Access the full Humphrey's teaching library + <br /> Additional
						subscriber exclusive content
					</p>
					<Button
						variant="outline"
						className="border-white bg-transparent text-white">
						Start Streaming
					</Button>
				</div>
			</div>
		</Element>
	);
}

export default Hero;
