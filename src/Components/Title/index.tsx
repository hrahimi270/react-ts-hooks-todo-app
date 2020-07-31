import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import classnames from "classnames";
import { useTodoDispatchContext } from "../../Context/TodoContext";
import { useThemeContext } from "../../Context/ThemeContext";

interface ITitle {
	title: string;
	inCustomList?: boolean;
}

const Title: FC<ITitle> = ({ title, inCustomList = false }) => {
	const { theme } = useThemeContext();
	const { deleteList } = useTodoDispatchContext();
	const { push } = useHistory();
	const { id = "" } = useParams();
	const isDark = theme === "dark";

	const titleClassnames = classnames("text-2xl font-bold mb-4 mt-8", {
		"text-gray-700": !isDark,
		"text-gray-200": isDark,
	});
	const buttonClassnames = classnames(
		"flex p-3 text-2xl focus:outline-none",
		{
			"hover:text-red-600": !isDark,
			"text-gray-800": !isDark,
			"text-red-300": isDark,
			"hover:text-red-500": isDark,
		},
	);

	return (
		<div className="flex items-center justify-between">
			<h1 className={titleClassnames}>{title}</h1>

			{inCustomList && (
				<button
					className={buttonClassnames}
					onClick={() => deleteList(id, push("/tasks"))}
				>
					<FiTrash />
				</button>
			)}
		</div>
	);
};

export default Title;
