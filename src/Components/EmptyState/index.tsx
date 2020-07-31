import React from "react";
import classnames from "classnames";
import { useThemeContext } from "../../Context/ThemeContext";

type props = {
	image: string;
	text: string;
};

export default (props: props) => {
	const { theme } = useThemeContext();
	const isDark = theme === "dark";

	const paragraphClassnames = classnames("text-xl", {
		"text-gray-600": !isDark,
		"text-gray-200": isDark,
	});

	return (
		<div className="flex flex-col justify-center items-center h-full w-full">
			<img src={props.image} alt={props.text} className="max-w-lg" />
			<p className={paragraphClassnames}>{props.text}</p>
		</div>
	);
};
