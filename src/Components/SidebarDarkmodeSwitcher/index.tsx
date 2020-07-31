import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import {
	useThemeContext,
	useThemeDispatcherContext,
} from "../../Context/ThemeContext";
import moonImg from "../../Statics/moon.svg";
import sunImg from "../../Statics/sun.svg";

const ModeImage = styled.img`
	width: 15px;
	margin-right: 0.5rem;
`;

const SidebarDarkmodeSwitcher: FC = () => {
	const { theme } = useThemeContext();
	const { toggleTheme } = useThemeDispatcherContext();
	const isDark = theme === "dark";

	const buttonsClassnames = classnames(
		"flex self-center items-center py-2 px-3 text-xs rounded-lg mb-4 focus:outline-none",
		{
			"bg-gray-800": !isDark,
			"hover:bg-gray-700": !isDark,
			"bg-gray-200": isDark,
			"hover:bg-gray-300": isDark,
			"text-white": !isDark,
			"text-gray-800": isDark,
		},
	);

	return (
		<button className={buttonsClassnames} onClick={toggleTheme}>
			{isDark ? (
				<>
					<ModeImage src={sunImg} alt="light mode" />
					<span>Come to Light</span>
				</>
			) : (
				<>
					<ModeImage src={moonImg} alt="dark mode" />
					<span>Come to Dark</span>
				</>
			)}
		</button>
	);
};

export default SidebarDarkmodeSwitcher;
