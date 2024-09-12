import Hero from '@/components/hero';
import Lessons from '@/components/lessons';
import Contact from '@/components/contact';
import Subscribe from '@/components/subscribe';
import Footer from './components/footer';
import { useEffect, useRef } from 'react';
import { LenisRef, ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import 'lenis/dist/lenis.css';

function App() {
	const lenisRef = useRef<LenisRef>(null);

	useEffect(() => {
		function update(time: number) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}

		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	});
	return (
		<>
			<ReactLenis ref={lenisRef} autoRaf={false} />
			<main className="grid min-h-screen overflow-scroll overflow-x-hidden relative">
				<Hero />
				<Lessons />
				<Subscribe />
				<Contact />
				<Footer />
			</main>
		</>
	);
}

export default App;
