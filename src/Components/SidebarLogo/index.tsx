import React, { FC } from "react";
import logo from "../../Statics/logo.svg";

const SidebarLogo: FC = () => {
	return (
		<div className="flex justify-center mb-4">
			<img src={logo} alt="Todo App" className="max-w-full h-16" />
		</div>
	);
};

export default SidebarLogo;
