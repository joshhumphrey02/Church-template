import { Element } from 'react-scroll';
import SubscriptionCard from './sub-card';

function Subscribe() {
	return (
		<Element
			name="subscribe"
			className="md:h-[85dvh] bg-white px-4 md:px-32 py-12 space-y-8 mb-1">
			<div className=" space-y-3 text-[#412123]">
				<h4 className="text-base text-center">SUBSCRIBE TODAY</h4>
				<h1 className="text-xl md:text-3xl text-center w-full md:w-[55%] mx-auto">
					Stream Humphrey's Teaching Library & Grow in your walk with enternal
					father{' '}
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
				{subs.map((sub) => (
					<div>
						<SubscriptionCard key={sub.id} data={sub} />
					</div>
				))}
			</div>
		</Element>
	);
}

export default Subscribe;

const subs = [
	{
		id: 1,
		duration: 'Monthly Subscription',
		durationDes: 'Paid Monthly',
		price: '$15.00',
		features: [
			"Stream The Humphrey's Teaching Catalog",
			'Access Lessons Exclusive to Faith',
			'$15 Paid Monthly',
		],
		desc: "Access to all of Humphrey's teachings and resources for one month",
	},
	{
		id: 2,
		duration: 'Quartely Subscription',
		durationDes: 'Paid Quarterly (Every 3 months)',
		price: '$11.00',
		features: [
			"Stream The Humphrey's Teaching Catalog",
			'Access Lessons Exclusive to Faith',
			'$35 Paid Qurterly',
		],
		desc: "Access to all of Humphrey's teachings and resources for one year",
	},
	{
		id: 3,
		duration: 'Yearly Subscription',
		durationDes: 'Paid Yearly',
		price: '$10.00',
		features: [
			"Stream The Humphrey's Teaching Catalog",
			'Access Lessons Exclusive to Faith',
			'$125 Paid Yeraly',
		],
		desc: "Unlimited access to all of Humphrey's teachings and resources for life",
	},
];
