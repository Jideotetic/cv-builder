import Link from "next/link";
import { TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { HiOutlineChatBubbleOvalLeft, HiCheckCircle } from "react-icons/hi2";

export default function Home() {
	return (
		<main className="bg-white pt-32">
			<div className="px-4 max-w-6xl w-full mx-auto">
				<div className="px-4 py-2 text-sm rounded-full border font-extrabold w-max">
					THE <span className="text-blue-500">#1</span> RESUME BUILDER
				</div>
				<div className="mt-12 pb-40">
					<h2 className="text-[clamp(2.7994rem,2.4609rem+1.6922vw,3.8147rem)] text-center font-bold max-w-[600px] mx-auto leading-none">
						Create a Job-Ready Resume in Minutes
					</h2>
				</div>
			</div>

			<div className="px-4 min-h-96 bg-gray-200">
				<div className="max-w-6xl w-full mx-auto relative">
					{/* DESIGN CARD */}
					<div className="h-60 bg-white max-w-52 w-full shadow-xl absolute left-0 -top-20 rounded-xl p-4">
						<div className="h-7 w-full border rounded-full mb-3 text-sm px-3 flex items-center justify-between font-extrabold py-1">
							lorem
							<HiOutlineChatBubbleOvalLeft className="w-4 h-4" />
						</div>
						<div className="h-3 w-[85%] rounded-full bg-gray-200 mb-1"></div>
						<div className="h-3 w-[50%] rounded-full bg-gray-100 mb-4"></div>
						<div className="relative mb-4">
							<div className="h-16 w-full border border-blue-500 border-dashed rounded-xl bg-gray-100"></div>
							<div className="h-16 w-full border absolute -top-2 -right-7 shadow-md rounded-xl bg-white"></div>
						</div>
						<div className="h-3 w-[85%] rounded-full bg-gray-200 mb-1"></div>
						<div className="h-3 w-[85%] rounded-full bg-gray-100 mb-1"></div>
						<div className="h-3 w-[50%] rounded-full bg-gray-100"></div>
					</div>

					<div className="h-56 bg-white max-w-52 absolute right-0 top-56 w-full shadow-xl rounded-xl p-4">
						<HiCheckCircle className="w-8 h-8 fill-green-500 absolute -top-4 -right-2" />
						<div className="w-full text-center mb-1 font-extrabold">
							Dream Job
						</div>
						<div className="text-center text-[12px] text-gray-300 mb-3">
							Company Name
						</div>
						<div className="flex justify-around mb-4">
							<div className="border px-1 text-[10px] rounded-2xl">lorem</div>
							<div className="border px-1 text-[10px] rounded-2xl">lorem</div>
							<div className="border px-1 text-[10px] rounded-2xl">lorem</div>
						</div>
						<div className="h-3 w-[85%] mx-auto rounded-full bg-gray-100 mb-1"></div>
						<div className="h-3 w-[75%] mx-auto rounded-full bg-gray-100 mb-1"></div>
						<div className="h-3 w-[65%] mx-auto rounded-full bg-gray-100 mb-5"></div>
						<hr className="mb-5" />
						<div className="text-center font-semibold text-sm">$5,500</div>
					</div>
				</div>
			</div>

			<div className="pt-40 px-4 min-h-96">
				<div className="max-w-6xl w-full mx-auto">
					<div className="flex flex-col gap-2">
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
				</div>
			</div>
		</main>
	);
}
