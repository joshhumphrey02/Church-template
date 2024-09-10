import Hero from '@/components/hero';
import Lessons from '@/components/lessons';
import Contact from '@/components/contact';
import Subscribe from '@/components/subscribe';
import Footer from './components/footer';

function App() {
	return (
		<main className="grid min-h-screen">
			<Hero />
			<Lessons />
			<Subscribe />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
