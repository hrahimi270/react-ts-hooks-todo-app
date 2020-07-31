import React, { useState, FC } from "react";
import classnames from "classnames";
import { FiPlus } from "react-icons/fi";
import uniqid from "uniqid";
import { ITask } from "../../Context/TodoContext";
import { useThemeContext } from "../../Context/ThemeContext";

type props = {
	isImportant: boolean;
	isMyday: boolean;
	listID?: string;
	onAdd: Function;
};

const AddTask: FC<props> = (props) => {
	const { theme } = useThemeContext();
	const [value, setValue] = useState("");

	const addTaskWrapperClassnames = classnames(
		"flex items-center w-full rounded-md mb-3 py-1 px-3",
		{
			"bg-gray-200": theme === "light",
			"bg-gray-800": theme === "dark",
		},
	);
	const addTaskButtonClassnames = classnames("focus:outline-none", {
		"text-gray-600": theme === "light",
		"text-white": theme === "dark",
	});
	const addTaskInputClassnames = classnames(
		"bg-transparent flex-grow focus:outline-none px-3 py-2",
		{
			"placeholder-gray-500 text-gray-700": theme === "light",
			"placeholder-gray-300 text-white": theme === "dark",
		},
	);

	function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
		const { key, keyCode } = event;

		if (key === "Enter" && keyCode === 13) {
			handleAddingTask();
		}
	}

	function handleAddingTask() {
		const id = uniqid();
		const task = value;
		const { listID = "", isImportant, isMyday } = props;

		if (task !== "") {
			const taskData: ITask = {
				id,
				task,
				done: false,
				important: isImportant,
				myday: isMyday,
				listID,
			};
			props.onAdd(taskData);

			// clear input
			setValue("");
		}
	}

	return (
		<div className={addTaskWrapperClassnames}>
			<button
				type="button"
				className={addTaskButtonClassnames}
				onClick={handleAddingTask}
			>
				<FiPlus />
			</button>
			<input
				type="text"
				placeholder="Write new task and press Enter"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => handleKeydown(e)}
				className={addTaskInputClassnames}
				autoFocus
			/>
		</div>
	);
};

export default AddTask;
