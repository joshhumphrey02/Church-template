import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { HeaderLinks } from './header';

export default function SideBar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = () => {
		setIsOpen(false);
	};
	useEffect(() => {
		gsap.fromTo(
			'.link',
			{ opacity: 0, x: '100%' },
			{ opacity: 1, x: 0, stagger: 0.2, duration: 2, ease: 'power3.out' } // End state
		);
	}, [isOpen]);
	useEffect(() => {
		const links = document.querySelectorAll('.link');
		links.forEach((link) => {
			link.addEventListener('click', handleLinkClick);
		});
	}, []);
	return (
		<Sheet onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Menu className="w-7 flex md:hidden h-7 ml-2" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				<SheetHeader>
					<SheetTitle>ECHOOK.COM</SheetTitle>
				</SheetHeader>
				<div className="flex-1 ">
					<HeaderLinks
						containerClassName=" h-full flex flex-col justify-center space-y-12"
						className="text-base"
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
}
