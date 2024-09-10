import { Button } from '../ui/button';
import { Input } from '../ui/input';

function FooterForm() {
	return (
		<form>
			<div className="bg-white text-black w-full md:w-1/2 px-3 items-center mx-auto border-[1rem] py-2 rounded-md border-[#2b0a0a]/60 flex gap-x-3">
				<Input
					type="email"
					className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-transparent"
					placeholder="Email Address"
				/>
				<Button
					className="bg-[#2b0a0a] border-0 focus-visible:ring-0 px-8 focus-visible:ring-transparent text-white rounded-md "
					size="sm"
					type="submit">
					Sign up
				</Button>
			</div>
		</form>
	);
}

export default FooterForm;
