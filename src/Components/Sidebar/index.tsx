import React, { useContext } from "react";
import { TodoContext } from "../../Context/TasksContext";
import SidebarLogo from "../SidebarLogo";
import SidebarLinksWrapper from "../SidebarLinksWrapper";
import SidebarActions from "../SidebarActions";

export default () => {
	const todoContext = useContext(TodoContext);

	return (
		<aside className="fixed left-0 bottom-0 top-0 block overflow-y-auto overflow-hidden shadow-xl bg-white flex flex-col flex-no-wrap flex-wrap md:w-64 z-10 py-4">
			{/* Logo */}
			<SidebarLogo />

			{/* Links */}
			<SidebarLinksWrapper />

			{/* Actions */}
			<SidebarActions onAdd={todoContext.addList} />
		</aside>
	);
};
