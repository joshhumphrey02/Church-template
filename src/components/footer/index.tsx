import { Element } from 'react-scroll';
import FooterLinks from './footer';
import FooterForm from './form';

function Footer() {
	const backgroundImageProperties = {
		backgroundImage: `url('/src/assets/images/img1.jpg')`,
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
		backgroundRepeat: 'no-repeat',
		borderImage:
			'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) fill 1',
	};
	return (
		<Element
			style={backgroundImageProperties}
			name="footer"
			className=" pt-12 text-white ">
			<div className="space-y-4  px-4 md:px-32 text-center">
				<h1 className="text-3xl">
					Subscribe to Our Monthly Church Newstletter
				</h1>
				<p className=" w-full md:w-1/2 mx-auto">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
					accusamus unde asperiores!
				</p>
				<FooterForm />
			</div>
			<FooterLinks />
			<div className="px-4 md:px-32 bg-[#48160c] py-8 flex gap-y-3 flex-col md:flex-row md:justify-between items-center">
				<p className="text-center">
					&copy; 2024 Nerds Lab. All rights reserved.
				</p>
				<div>
					<p className="text-center hover:text-white/80">
						Designed by{' '}
						<a target="_blank" href="linkedin.com/in/joshhumphrey02/">
							Humphrey Joshua
						</a>
					</p>
				</div>
			</div>
		</Element>
	);
}

export default Footer;
