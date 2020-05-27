import React, { useContext } from "react";
import classnames from "classnames";
import { ThemeContext } from "../../Context/ThemeContext";

type props = {
	children: React.ReactNode;
};

export default (props: props) => {
	const { theme } = useContext(ThemeContext);
	const sectionClassName = classnames(
		"relative md:ml-64 flex flex-col px-4 min-h-screen w-full",
		{
			"bg-gray-100": theme === "light",
			"bg-gray-700": theme === "dark",
		},
	);

	return <section className={sectionClassName}>{props.children}</section>;
};
