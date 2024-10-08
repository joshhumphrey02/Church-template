import { ChevronUp, Play } from 'lucide-react';
import Lesson from './lesson';
import { Element } from 'react-scroll';
import { Button } from '../ui/button';
import { animateScroll } from 'react-scroll';

function Lessons() {
	const options = {
		duration: 3000,
		smooth: 'easeInOutQuad',
	};
	return (
		<Element name="lessons" className="flex flex-col">
			<div className=" grid">
				{lessons.map((item) => (
					<Lesson data={item} key={item.id} />
				))}
			</div>
			<div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 bg-[#f8f1ee] items-center px-4 md:px-32 py-10">
				<div className="flex flex-col space-y-2">
					<span className="text-center md:text-start">Weekly lesson</span>
					<h2 className=" uppercase text-xl font-RobotoBold ">
						Abiding in Salvation
					</h2>
				</div>
				<div className=" relative w-40 h-40 hover:rotate-[360deg] transition-all duration-1000 hover:ease-in-out rounded-lg overflow-hidden shadow border border-border">
					<h3 className=" uppercase relative text-xl z-20 h-full text-white w-full flex text-center justify-center items-center">
						Abiding in Salvation
					</h3>
					<div
						className="w-full h-full object-cover top-0 left-0 absolute"
						style={{
							borderImage:
								'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)) fill 1',
							backgroundImage: "url('/images/img3.jpeg')",
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}
					/>
				</div>
				<div className="flex flex-col gap-y-3 w-full md:w-96 bg-white px-8 py-6 rounded-lg">
					<div className="flex gap-x-3 items-center">
						<span className="rounded-full hover:animate-spin bg-red-600 p-2 text-white">
							<Play className="w-5 h-5" />
						</span>
						<h3 className=" uppercase text-xl  font-RobotoBold">
							Abiding in Salvation
						</h3>
					</div>
					<div className="w-full h-16">
						<img
							className="w-full h-full object-cover"
							src="/images/music.jpeg"
							alt="music wave"
						/>
					</div>
				</div>
				<Button
					onClick={() => animateScroll.scrollToTop(options)}
					variant={'ghost'}
					className="rounded-full bg-[#48160c] animate-bounce text-white p-1 px-2.5 fixed bottom-6 z-30 right-6">
					<ChevronUp className="w-5 h-5" strokeWidth={3} />
				</Button>
			</div>
		</Element>
	);
}

export default Lessons;

const lessons = [
	{
		id: 1,
		image: '/images/img3.jpeg',
		title: 'Teaching Salvation As Way of Life',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero vitae accusamus repudiandae vel obcaecati velit suscipit sequi porro, sint debitis inventore error neque sed tempore, ullam quod quia dolor esse.',
	},
	{
		id: 2,
		image: '/images/img2.jpg',
		title:
			'An International Streaming Platform Dedicated to Developing Global Leaders',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero vitae accusamus repudiandae vel obcaecati velit suscipit sequi porro, sint debitis inventore error neque sed tempore, ullam quod quia dolor esse.',
	},
	{
		id: 3,
		image: '/images/img4.jpeg',
		title: 'Teaching Salvation As Way of Life',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero vitae accusamus repudiandae vel obcaecati velit suscipit sequi porro, sint debitis inventore error neque sed tempore, ullam quod quia dolor esse.',
	},
	{
		id: 4,
		image: '/images/img2.jpg',
		title:
			'An International Streaming Platform Dedicated to Developing Global Leaders',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero vitae accusamus repudiandae vel obcaecati velit suscipit sequi porro, sint debitis inventore error neque sed tempore, ullam quod quia dolor esse.',
	},
];
