import React from "react";
import classnames from "classnames";
import { Link, useHistory } from "react-router-dom";

type props = {
	path: string;
	text: string;
	color?:
		| "red"
		| "orange"
		| "yellow"
		| "green"
		| "blue"
		| "purple"
		| "pink"
		| "gray";
	icon?: React.ReactNode;
};

export default (props: props) => {
	const {
		location: { pathname },
	} = useHistory();
	const activeLink: Boolean = props.path === pathname;

	const { color = "gray" } = props;
	const colorStrength = color === "gray" ? 200 : 100;
	const hoverClass = `hover:bg-${color}-${colorStrength}`;
	const activeClass = `bg-${color}-100`;
	const linkClassName = classnames(
		"w-11/12 flex items-center px-6 py-3 mb-2 mx-auto rounded-md",
		{
			[hoverClass]: !activeLink,
			[activeClass]: activeLink,
		},
	);
	const iconClassName = classnames("mr-2", `text-${color}-500`);

	return (
		<Link to={props.path} className={linkClassName}>
			{props.icon ? (
				<div className={iconClassName}>{props.icon}</div>
			) : null}
			{props.text}
		</Link>
	);
};
