import Link from "next/link";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";

export default function Footer() {
	return (
		<footer className="pt-40 pb-8 px-4 min-h-80">
			<div className="max-w-6xl w-full mx-auto">
				<div className="flex flex-col gap-2 items-start">
					<Link href="https://github.com/Jideotetic/cv-builder">
						<TfiGithub
							title="Github"
							className="w-7 h-7 fill-white bg-blue-500 p-2 rounded-full"
						/>
					</Link>
					<Link href="">
						<TfiLinkedin
							title="Linkedin"
							className="w-7 h-7 fill-white bg-blue-500 p-2 rounded-full"
						/>
					</Link>
				</div>
				<hr className="my-10" />

				<div className="text-center text-gray-500 text-sm">
					<p>Copyright 2024 - CV Builder</p>
				</div>
			</div>
		</footer>
	);
}
