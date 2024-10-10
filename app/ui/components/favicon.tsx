"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

export default function Favicon() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => setIsDarkMode(mediaQuery.matches);

		mediaQuery.addEventListener("change", handleChange);
		handleChange();

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, []);

	return (
		<Head>
			<link
				rel="shortcut icon"
				href={
					isDarkMode
						? "/favicon-dark-cv-icon.svg"
						: "/favicon-light-cv-icon.svg"
				}
			/>
		</Head>
	);
}
