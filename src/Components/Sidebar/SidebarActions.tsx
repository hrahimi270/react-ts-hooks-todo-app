import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import uniqid from "uniqid";
import { ListType } from "../../context";

type props = {
	onAdd: Function;
};

export default (props: props) => {
	const [inputValue, setInputValue] = useState<string>("");

	function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
		const { key, keyCode } = event;

		if (key === "Enter" && keyCode === 13) {
			const id = uniqid();
			const name = inputValue;

			const listData: ListType = {
				id,
				name,
			};
			props.onAdd(listData);
			// clear input
			setInputValue("");
		}
	}

	return (
		<div className="w-11/12 flex items-center justify-between px-6 mx-auto">
			<div className="flex items-center text-gray-500 hover:text-gray-600 focus:outline-none">
				<span className="mr-2">
					<FiPlus />
				</span>
				<input
					type="text"
					placeholder="Add new list"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => handleKeydown(e)}
					className="placeholder-gray-500 text-gray-700 focus:outline-none px-2 py-1"
				/>
			</div>
		</div>
	);
};