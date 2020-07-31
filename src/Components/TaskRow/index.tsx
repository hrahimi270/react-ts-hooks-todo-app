import React, { FC } from "react";
import classNames from "classnames";
import { FiStar, FiSun, FiTrash, FiList } from "react-icons/fi";
import { useThemeContext } from "../../Context/ThemeContext";
import RowCheckbox from "../RowCheckbox";

type props = {
	id: string;
	task: string;
	done: boolean;
	important?: boolean;
	myDay?: boolean;
	sourceList?: string;
	onEdit: Function;
	onDeleteClick: Function;
};

const TaskRow: FC<props> = (props) => {
	const { theme } = useThemeContext();
	const isDark = theme === "dark";

	const taskRowClassnames = classNames(
		"flex items-center w-full mb-1 rounded-md py-1 px-3",
		{
			"bg-gray-300": !isDark,
			"bg-gray-900": isDark,
		},
	);

	const taskSourceListClassnames = classNames(
		"ml-3 flex items-center text-sm",
		{
			"text-gray-500": isDark,
			"text-gray-600": !isDark,
		},
	);

	const buttonsBaseClasses = classNames(
		"text-xl rounded-full p-3 focus:outline-none",
		{
			"focus:bg-gray-200 hover:bg-gray-100": !isDark,
			"focus:bg-gray-400 hover:bg-gray-400": isDark,
		},
	);
	const importantButtonClasses = classNames(buttonsBaseClasses, {
		"text-gray-600 hover:text-purple-600 focus:text-purple-600": !props.important,
		"text-purple-600 hover:text-purple-400 focus:text-purple-400":
			props.important,
	});
	const myDayButtonClasses = classNames(buttonsBaseClasses, {
		"text-gray-600 hover:text-orange-600 focus:text-orange-600": !props.myDay,
		"text-orange-600 hover:text-orange-400 focus:text-orange-400":
			props.myDay,
	});
	const DeleteButtonClasses = classNames(
		buttonsBaseClasses,
		"text-red-600 hover:text-red-400 focus:text-red-400",
	);

	function onDoneChanges() {
		const { id } = props;
		props.onEdit(id, {
			done: !props.done,
		});
	}

	function importantClicked() {
		const { id } = props;
		props.onEdit(id, {
			important: !props.important,
		});
	}

	function myDayClicked() {
		const { id } = props;
		props.onEdit(id, {
			myday: !props.myDay,
		});
	}

	function deleteClicked() {
		const { id } = props;
		props.onDeleteClick(id);
	}

	return (
		<div className={taskRowClassnames}>
			<RowCheckbox
				label={props.task}
				checked={props.done}
				labelFor={props.id}
				onChange={onDoneChanges}
			/>

			{props.sourceList ? (
				<span className={taskSourceListClassnames}>
					<FiList />
					<span className="ml-1">{props.sourceList}</span>
				</span>
			) : null}

			<div className="ml-auto flex items-center">
				<button
					className={importantButtonClasses}
					onClick={importantClicked}
				>
					<FiStar />
				</button>
				<button className={myDayButtonClasses} onClick={myDayClicked}>
					<FiSun />
				</button>
				<button className={DeleteButtonClasses} onClick={deleteClicked}>
					<FiTrash />
				</button>
			</div>
		</div>
	);
};

export default TaskRow;
