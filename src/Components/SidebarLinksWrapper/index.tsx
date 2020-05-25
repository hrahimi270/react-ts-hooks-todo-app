import React, { useContext } from "react";
import { FiStar, FiSun, FiHome, FiList } from "react-icons/fi";
import classnames from 'classnames';
import { TodoContext, IList, IState } from "../../Context/TodoContext";
import { ThemeContext } from "../../Context/ThemeContext";
import SidebarLink from "../SidebarLink";

export default () => {
	const { theme } = useContext(ThemeContext);
	const { lists } = useContext<IState>(TodoContext);
	const isDark = theme === 'dark';

	const linksDividerClassnames = classnames('block w-11/12 my-2 mx-auto', {
		'bg-gray-200': !isDark,
		'bg-gray-600': isDark
	})

	return (
		<div className="flex-grow mb-4">
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
				className={linksDividerClassnames}
				style={{ height: 2 }}
			/>

			{lists.length
				? lists.map((list: IList) => {
					return (
						<SidebarLink
							key={list.id}
							path={`/tasks/list/${list.id}`}
							text={list.name}
							icon={<FiList />}
						/>
					);
				})
				: ""}
		</div>
	);
};
