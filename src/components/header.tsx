import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-scroll';
import SideBar from './sideBar';
import { cn } from '@/lib/utils';

function Header() {
	return (
		<div className="py-4 w-full">
			<div className="flex space-x-6 justify-between items-center text-white">
				<div className="flex space-x-12 items-center w-1/2">
					<h2 className="text-xl">ECHOOK.COM</h2>
					<HeaderLinks />
				</div>
				<ScrollLink to="contact">
					<Button className=" ml-auto bg-white text-orange-600 font-bold">
						Get in Touch
					</Button>
				</ScrollLink>
				<SideBar />
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
			activeClass=" border-b border-white"
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

interface HeaderLinksProps {
	className?: string;
	containerClassName?: string;
}

export function HeaderLinks({
	className,
	containerClassName,
}: HeaderLinksProps) {
	return (
		<ul
			className={cn(
				' hidden md:flex md:flex-1 md:justify-end md:space-x-8 md:items-center ',
				containerClassName
			)}>
			<li>
				<ScrollLink
					className={cn(
						'text-sm font-bold link hover:border-blue-500 hover:border-b-2',
						className
					)}
					to={'about'}>
					About
				</ScrollLink>
			</li>
			<li className=" flex items-center space-x-2">
				<ScrollLink
					className={cn('text-sm link font-bold ', className)}
					to="lessons">
					Lessons
				</ScrollLink>
				<ChevronDown className="w-4 h-4 text-sm hidden md:inline-block" />
			</li>
			<li>
				<ScrollLink
					className={cn(
						'text-sm link font-bold hover:border-blue-500 hover:border-b-2',
						className
					)}
					to={'subscribe'}>
					Subscribe
				</ScrollLink>
			</li>
			<li>
				<ScrollLink
					className={cn(
						'text-sm link font-bold hover:border-blue-500 hover:border-b-2',
						className
					)}
					to={'contact'}>
					Contact
				</ScrollLink>
			</li>
		</ul>
	);
}
