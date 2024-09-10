import Header from '../header';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Element } from 'react-scroll';

function Hero() {
	const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
	const [isVideo, setIsVideo] = useState(false);

	useEffect(() => {
		const media = [
			'/images/img2.jpg',
			'/images/img3.jpeg',
			'/images/img4.jpeg',
		];
		const directions = ['right', 'left', 'top', 'bottom'] as const;
		let timeline = gsap.timeline({
			onComplete: () => updateMedia(),
		});

		const updateMedia = () => {
			const nextIndex = (currentMediaIndex + 1) % media.length;
			const selectedMedia = media[nextIndex];
			const currentDirection = directions[nextIndex % directions.length];

			let fromVars = {};
			if (currentDirection === 'right') {
				fromVars = { x: '100%' };
			} else if (currentDirection === 'left') {
				fromVars = { x: '-100%' };
			} else if (currentDirection === 'top') {
				fromVars = { y: '-100%' };
			} else if (currentDirection === 'bottom') {
				fromVars = { y: '100%' };
			}
			timeline = gsap.timeline({
				onComplete: () => updateMedia(),
			});
			timeline.fromTo('.hero-background', fromVars, {
				x: '0%',
				y: '0%',
				duration: 15,
				ease: 'power3.out',
				onComplete: () => {
					setCurrentMediaIndex(nextIndex);
					setIsVideo(selectedMedia.includes('.mp4'));
				},
			});

			timeline.to('.hero-background', { duration: 20 });
		};

		updateMedia();
		return () => {
			timeline.kill();
		};
	}, [currentMediaIndex]);
	return (
		<Element
			name="about"
			className="relative flex flex-col h-screen bg-gray-200 px-4  md:px-32">
			<div
				style={{
					borderImage:
						'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)) fill 1',
				}}
				className="absolute top-0 left-0 w-full h-full overflow-hidden">
				<div className="hero-background w-full h-full">
					{!isVideo ? (
						<div
							className="w-full h-full bg-cover bg-center  transition-opacity duration-1000"
							style={{
								borderImage:
									'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)) fill 1',
								backgroundImage: `url('${
									currentMediaIndex < 2
										? `/images/img${currentMediaIndex + 1}.jpg`
										: '/images/img4.jpeg'
								}')`,
							}}></div>
					) : (
						<video
							className="w-full h-full object-cover"
							style={{
								borderImage:
									'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)) fill 1',
							}}
							src={'/images/vid.mp4'}
							autoPlay
							muted
							loop
						/>
					)}
				</div>
			</div>

			<div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white space-y-6">
				<Header />
				<div className="flex-1 flex flex-col justify-center items-center text-white space-y-4 md:space-y-6">
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
