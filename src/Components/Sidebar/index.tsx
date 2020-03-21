import React from "react";
import {
	FiStar,
	FiSun,
	FiHome,
	FiList,
	FiPlus,
	FiFolderPlus,
} from "react-icons/fi";
import SidebarLink from "../SidebarLink";
import logo from "../../Statics/logo.svg";

export default () => {
	return (
		<aside className="fixed left-0 bottom-0 top-0 block overflow-y-auto overflow-hidden shadow-xl bg-white flex flex-col flex-no-wrap flex-wrap md:w-64 z-10 py-4">
			{/* Logo */}
			<div className="flex justify-center mb-4">
				<img src={logo} alt="Todo App" className="max-w-full h-16" />
			</div>

			{/* Links */}
			<div className="flex-grow">
				<SidebarLink
					path="/tasks/important"
					text="Important"
					color="purple"
					icon={<FiStar />}
				/>
				<SidebarLink
					path="/tasks/myday"
					text="My Day"
					color="orange"
					icon={<FiSun />}
				/>
				<SidebarLink
					path="/tasks"
					text="Tasks"
					color="blue"
					icon={<FiHome />}
				/>
				<span
					className="block w-11/12 bg-gray-200 my-2 mx-auto"
					style={{ height: 2 }}
				/>
				<SidebarLink
					path="/tasks/list/285osg-2sjngs0"
					text="WPJS Test project"
					icon={<FiList />}
				/>
			</div>

			{/* Actions */}
			<div className="w-11/12 flex items-center justify-between px-6 mx-auto">
				<button className="flex items-center text-gray-500 hover:text-gray-600 focus:outline-none">
					<span className="mr-2">
						<FiPlus />
					</span>
					New list
				</button>

				<button className="text-gray-500 hover:text-gray-600 focus:outline-none">
					<FiFolderPlus />
				</button>
			</div>
		</aside>
	);
};
