import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);
	useEffect(() => {
		const form = formRef.current;
		if (form) {
			gsap.fromTo(
				form,
				{ scale: 0.4 },
				{
					scale: 1,
					duration: 5,
					ease: 'power1.out',
					scrollTrigger: {
						trigger: form,
						start: 'top bottom',
						end: 'bottom center',
						scrub: true,
					},
				}
			);
		}
	}, []);
	return (
		<div>
			<form
				ref={formRef}
				onSubmit={(e) => e.preventDefault()}
				className=" w-full md:w-[40%]  bg-white shadow rounded-lg mx-auto grid gap-6 p-6 py-8">
				<div className="grid md:grid-cols-2 gap-x-3">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="name">Full Name</Label>
						<Input id="name" type="text" placeholder="Name" />
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="Email address" />
					</div>
				</div>
				<div className="grid md:grid-cols-2 gap-x-3">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="phone">Phone</Label>
						<Input id="phone" type="text" placeholder="Phone number" />
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="address">Address</Label>
						<Input id="address" type="text" placeholder="Address" />
					</div>
				</div>
				<div className="grid w-full items-center gap-1.5">
					<Label htmlFor="message">Message</Label>
					<Textarea className="w-full" placeholder="Type your message here." />
				</div>
				<Button className=" bg-red-700 text-white">Submit</Button>
			</form>
		</div>
	);
}

export default ContactForm;
