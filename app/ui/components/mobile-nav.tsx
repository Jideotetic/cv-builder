import { NAV_LINKS } from "@/app/lib/constants";
import Link from "next/link";
import Button from "./button";
import { CloseButton } from "@headlessui/react";

export default function MobileNav() {
	return (
		<nav className="h-full">
			<ul className="flex flex-col items-center justify-evenly h-full">
				{NAV_LINKS.map((link, idx) => (
					<li key={idx}>
						<CloseButton
							as={Link}
							href={`/${link.link}`}
							className="focus:outline-blue-500 focus:text-blue-500 hover:text-blue-500 group"
						>
							{link.title}
						</CloseButton>
					</li>
				))}
				<li>
					<Button title="Create CV" />
				</li>
			</ul>
		</nav>
	);
}
