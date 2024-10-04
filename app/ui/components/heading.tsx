import Link from "next/link";

export default function Heading() {
	return (
		<>
			<Link
				href={`#main`}
				className="focus:top-4 focus:outline-blue-500 text-sm absolute -top-20 left-auto bg-blue-500 text-white p-2 transition-all duration-300"
			>
				Skip to main content
			</Link>
			<h1 className="font-bold text-xl">
				<Link href="/" className="focus:outline-blue-500">
					<span className="text-blue-500">CV</span> Builder
				</Link>
			</h1>
		</>
	);
}
