import MobileMenu from "../components/mobile-menu";
import Heading from "../components/heading";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import MobileNav from "../components/mobile-nav";
import Button from "../components/button";
export default function Header() {
	return (
		<header className="max-w-6xl w-full flex justify-between items-center p-4 bg-white mx-auto fixed left-0 right-0">
			<Heading />

			<Popover className="group relative">
				<PopoverButton className="focus:outline-blue-500 lg:hidden">
					<MobileMenu />
				</PopoverButton>
				<PopoverPanel
					transition
					className="w-full h-[calc(100vh-71px)] fixed top-[70px] left-0 data-[closed]:left-[-999px] bg-gray-200 transition-all duration-300 ease-in-out"
				>
					<MobileNav />
				</PopoverPanel>
			</Popover>

			{/* <NavLinks /> */}
			<div className="hidden lg:block">
				<Button title="Create CV" />
			</div>
		</header>
	);
}
