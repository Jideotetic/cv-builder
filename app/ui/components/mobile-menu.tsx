export default function MobileMenu() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="#3b82f6"
			className="size-8"
		>
			<path
				strokeLinecap="square"
				strokeLinejoin="round"
				className={`transition-transform duration-300 ease-in-out group-data-[open]:rotate-45 group-data-[open]:translate-x-[9px] group-data-[open]:-translate-y-[2px]`}
				d="M3.75 6.75h16.5"
			/>
			<path
				strokeLinecap="square"
				strokeLinejoin="round"
				className={`transition-opacity duration-300 group-data-[open]:opacity-0`}
				d="M3.75 12h16.5"
			/>

			<path
				strokeLinecap="square"
				strokeLinejoin="round"
				className={`transition-transform duration-300 group-data-[open]:-rotate-45 group-data-[open]:-translate-x-[8px] group-data-[open]:translate-y-[8px]`}
				d="M3.75 17.25h16.5"
			/>
		</svg>
	);
}
