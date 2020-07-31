import React, { useState, FC } from "react";
import { FiPlus } from "react-icons/fi";
import uniqid from "uniqid";
import classnames from "classnames";
import { IList } from "../../Context/TodoContext";
import { useThemeContext } from "../../Context/ThemeContext";

interface ISidebarActions {
	onAdd: Function;
}

const SidebarActions: FC<ISidebarActions> = (props) => {
	const { theme } = useThemeContext();
	const [inputValue, setInputValue] = useState<string>("");
	const isDark = theme === "dark";

	const inputClassnames = classnames(
		"bg-transparent focus:outline-none px-2 py-1",
		{
			"placeholder-gray-600": !isDark,
			"placeholder-gray-400": isDark,
			"text-gray-800": !isDark,
			"text-gray-200": isDark,
		},
	);

	const buttonClassnames = classnames("mr-2 focus:outline-none", {
		"text-gray-500": !isDark,
		"text-gray-400": isDark,
		"hover:text-gray-700": !isDark,
		"hover:text-gray-300": isDark,
	});

	function handleKeydown(event: React.KeyboardEvent<HTMLInputElement>) {
		const { key, keyCode } = event;

		if (key === "Enter" && keyCode === 13) {
			handleAdd();
		}
	}

	function handleAdd() {
		const id = uniqid();
		const name = inputValue;

		if (name !== "") {
			const listData: IList = {
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
			<div className="flex items-center">
				<button className={buttonClassnames} onClick={handleAdd}>
					<FiPlus />
				</button>
				<input
					type="text"
					placeholder="Add new list"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => handleKeydown(e)}
					className={inputClassnames}
				/>
			</div>
		</div>
	);
};

export default SidebarActions;
