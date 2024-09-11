import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [isScaled, setIsScaled] = useState(false);
	useEffect(() => {
		const form = formRef.current;
		const inputs = form?.querySelectorAll('input, textarea');

		inputs?.forEach((input) => {
			input.addEventListener('focus', () => {
				if (!isScaled) {
					gsap.to(form, { scale: 1.3, duration: 2 });
					setIsScaled(true);
				}
			});

			input.addEventListener('blur', () => {
				if (
					!Array.from(inputs).some((input) => document.activeElement === input)
				) {
					gsap.to(form, { scale: 1, duration: 2 });
					setIsScaled(false);
				}
			});
		});

		return () => {
			inputs?.forEach((input) => {
				input.removeEventListener('focus', () => {});
				input.removeEventListener('blur', () => {});
			});
		};
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
