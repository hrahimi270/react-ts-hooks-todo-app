import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import uniqid from "uniqid";
import { TaskType } from "../../context";

type props = {
	isImportant: boolean;
	isMyday: boolean;
	listID?: string;
	onAdd: Function;
};

export default (props: props) => {
	const [value, setValue] = useState("");

	function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
		const { key, keyCode } = event;
		const { listID = '' } = props;

		if (key === "Enter" && keyCode === 13) {
			const id = uniqid();
			const task = value;

			const taskData: TaskType = {
				id,
				task,
				done: false,
				important: props.isImportant,
				myday: props.isMyday,
				listID
			};
			props.onAdd(taskData);

			// clear input
			setValue("");
		}
	}

	return (
		<div className="flex items-center w-full rounded-md bg-gray-200 mb-3 py-1 px-3">
			<span className="text-gray-600">
				<FiPlus />
			</span>
			<input
				type="text"
				placeholder="Write new task and press Enter"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => handleKeydown(e)}
				autoFocus
				className="bg-transparent flex-grow placeholder-gray-500 text-gray-700 focus:outline-none px-3 py-2"
			/>
		</div>
	);
};
