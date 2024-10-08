import { NAV_LINKS } from "@/app/lib/constants";
import Link from "next/link";

export default function DesktopNav() {
	return (
		<nav className="hidden lg:block">
			<ul className="flex gap-10 font-medium text-sm">
				{NAV_LINKS.map((link, idx) => (
					<li key={idx}>
						<Link
							href={`/${link.link}`}
							className="flex gap-2 items-center focus:outline-blue-500 focus:text-blue-500 hover:text-blue-500 group"
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
