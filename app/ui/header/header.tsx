import MobileMenu from "../components/mobile-menu";
import Heading from "../components/heading";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import MobileNav from "../components/mobile-nav";
import Button from "../components/button";
import DesktopNav from "../components/desktop-nav";
export default function Header() {
	return (
		<header className="px-4 py-8 bg-white fixed z-50 left-0 right-0">
			<div className="max-w-6xl w-full flex justify-between items-center mx-auto">
				<Heading />

				{/* MOBILE NAV */}
				<Popover className="group relative lg:hidden">
					<PopoverButton className="focus:outline-blue-500">
						<MobileMenu />
					</PopoverButton>
					<PopoverPanel
						transition
						className="w-full h-[calc(100vh-71px)] fixed top-[100px] left-0 data-[closed]:left-[-999px] bg-gray-200 transition-all duration-300 ease-in-out"
					>
						<MobileNav />
					</PopoverPanel>
				</Popover>

				{/* DESKTOP NAV */}
				<DesktopNav />
				<div className="hidden lg:block">
					<Button title="Create CV" />
				</div>
			</div>
		</header>
	);
}
