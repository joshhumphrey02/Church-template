function FooterLinks() {
	return (
		<div className="bg-[#2b0a0a] mt-12 px-4 md:px-32 py-8 pb-12 text-white flex flex-col md:flex-row gap-y-10 md:justify-between">
			<div className="flex-1 space-y-8">
				<h3 className="text-base">Nerdslab.com</h3>
				<ul className="space-y-1.5">
					<li className="text-xs">Rivers, Nigeria</li>
					<li className="text-xs">12, Nerds Avenue</li>
					<li className="text-xs">Tel: +2348149593345</li>
					<li className="text-xs">joshuahumphrey579@gmail.com</li>
				</ul>
			</div>
			<div className="flex-1 flex space-x-6 md:space-x-12">
				{footerLinks.map((item, i) => (
					<div key={i}>
						<h3 className="text-base">{item.text}</h3>
						<ul className="space-y-1.5 mt-4">
							{item.links.map((link, index) => (
								<li key={index}>
									<a className="text-xs" href={link.url}>
										{link.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default FooterLinks;

const footerLinks = [
	{
		text: 'About Us',
		links: [
			{
				text: 'Our Story',
				url: '/about/story',
			},
			{
				text: 'Our Team',
				url: '/about/team',
			},
			{
				text: 'Careers',
				url: '/about/careers',
			},
		],
	},
	{
		text: 'Services',
		links: [
			{
				text: 'Web Development',
				url: '/services/web-development',
			},
			{
				text: 'Mobile App Development',
				url: '/services/mobile-app-development',
			},
			{
				text: 'UI/UX Design',
				url: '/services/ui-ux-design',
			},
		],
	},
	{
		text: 'Resources',
		links: [
			{
				text: 'Blog',
				url: '/resources/blog',
			},
			{
				text: 'Case Studies',
				url: '/resources/case-studies',
			},
			{
				text: 'FAQs',
				url: '/resources/faqs',
			},
		],
	},
];
