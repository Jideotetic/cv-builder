"use client";
import { useRouter } from "next/navigation";
import { useClose } from "@headlessui/react";

interface ButtonProp {
	title: string;
}

export default function Button({ title }: ButtonProp) {
	const close = useClose();
	const router = useRouter();
	const handleClick = () => {
		router.push("/new-cv");
		close();
	};
	return (
		<button
			onClick={handleClick}
			className="border focus:bg-blue-500 focus:text-white focus:outline-blue-500 hover:bg-blue-500 hover:text-white shrink-0 border-blue-500 text-blue-500 py-2 px-3 text-sm rounded-full"
		>
			{title}
		</button>
	);
}
