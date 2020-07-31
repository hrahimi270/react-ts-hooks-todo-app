import React, { FC } from "react";
import classnames from "classnames";
import { useThemeContext } from "../../Context/ThemeContext";

const DashboardContent: FC = ({ children }) => {
	const { theme } = useThemeContext();
	const sectionClassName = classnames(
		"relative md:ml-64 flex flex-col px-4 min-h-screen w-full",
		{
			"bg-gray-100": theme === "light",
			"bg-gray-700": theme === "dark",
		},
	);

	return <section className={sectionClassName}>{children}</section>;
};

export default DashboardContent;
