import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-scroll';

function Header() {
	return (
		<div className="py-4 w-full">
			<div className="flex space-x-6 justify-between items-center text-white">
				<div className="flex space-x-12 items-center w-1/2">
					<h2 className="text-xl">ECHOOK.COM</h2>
					<ul className=" hidden md:flex flex-1 justify-end space-x-8 items-center ">
						<li>
							<ScrollLink
								className="text-sm border-b border-white font-bold hover:border-blue-500 hover:border-b-2"
								to={'about'}>
								About
							</ScrollLink>
						</li>
						<li className=" flex items-center space-x-2">
							<ScrollLink className="text-sm font-bold " to="lessons">
								Lessons
							</ScrollLink>
							<ChevronDown className="w-4 h-4 text-sm" />
						</li>
						<li>
							<ScrollLink
								className="text-sm font-bold hover:border-blue-500 hover:border-b-2"
								to={'subscribe'}>
								Subscribe
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								className="text-sm font-bold hover:border-blue-500 hover:border-b-2"
								to={'contact'}>
								Contact
							</ScrollLink>
						</li>
					</ul>
				</div>
				<ScrollLink to="contact">
					<Button className=" ml-auto bg-white text-orange-600 font-bold">
						Get in Touch
					</Button>
				</ScrollLink>
			</div>
		</div>
	);
}

export default Header;

interface ScrollLinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
}

function ScrollLink({ to, children, className, ...props }: ScrollLinkProps) {
	return (
		<Link
			{...props}
			activeClass="active"
			className={className}
			to={to}
			spy={true}
			smooth={'easeInOutQuad'}
			hashSpy={true}
			offset={50}
			duration={4000}
			delay={50}
			isDynamic={true}
			ignoreCancelEvents={false}
			spyThrottle={500}>
			{children}
		</Link>
	);
}
