import { Element } from 'react-scroll';
import ContactForm from './contact-form';

function Contact() {
	return (
		<Element
			name="contact"
			className="md:h-[100dvh] px-4 md:px-32 space-y-8 bg-[#f8f1ee] py-10">
			<div className=" flex flex-col justify-center items-center">
				<h1 className="after-line text-2xl mb-4">Contact Us</h1>
				<p className="text-center w-full md:w-1/2">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi id
					laudantium dolore, repudiandae eius soluta temporibus reprehenderit.
					Quis aperiam, laboriosam, illum maxime omnis ipsum, voluptatum
					perspiciatis saepe atque dolorum itaque.
				</p>
			</div>
			<ContactForm />
		</Element>
	);
}

export default Contact;
