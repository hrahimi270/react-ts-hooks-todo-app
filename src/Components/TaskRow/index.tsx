import React from "react";
import classNames from "classnames";
import { FiStar, FiSun, FiTrash } from "react-icons/fi";
import RowCheckbox from "../RowCheckbox";

type props = {
	id: string;
	task: string;
	done: boolean;
	important?: boolean;
	myDay?: boolean;
	onEdit: Function;
	onDeleteClick: Function;
};

export default (props: props) => {
	const buttonsBaseClasses =
		"text-xl rounded-full p-3 focus:outline-none focus:bg-gray-200 hover:bg-gray-200";
	const importantButtonClasses = classNames(buttonsBaseClasses, {
		"text-gray-600": !props.important,
		"hover:text-purple-600": !props.important,
		"focus:text-purple-600": !props.important,
		"text-purple-600": props.important,
		"hover:text-purple-400": props.important,
		"focus:text-purple-400": props.important,
	});
	const myDayButtonClasses = classNames(buttonsBaseClasses, {
		"text-gray-600": !props.myDay,
		"hover:text-orange-600": !props.myDay,
		"focus:text-orange-600": !props.myDay,
		"text-orange-600": props.myDay,
		"hover:text-orange-400": props.myDay,
		"focus:text-orange-400": props.myDay,
	});
	const DeleteButtonClasses = classNames(
		buttonsBaseClasses,
		"text-red-600",
		"hover:text-red-400",
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
		<div className="flex items-center w-full mb-1 rounded-md bg-gray-300 py-1 px-3">
			<RowCheckbox
				label={props.task}
				checked={props.done}
				labelFor={props.id}
				onChange={onDoneChanges}
			/>

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
