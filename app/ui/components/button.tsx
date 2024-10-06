interface ButtonProp {
	title: string;
}

export default function Button({ title }: ButtonProp) {
	return (
		<button className="border focus:bg-blue-500 focus:text-white focus:outline-blue-500 hover:bg-blue-500 hover:text-white shrink-0 border-blue-500 text-blue-500 py-1 px-3 text-sm rounded-full">
			{title}
		</button>
	);
}
