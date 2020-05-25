import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { TodoDispatcherContext, IDispatchers } from "../../Context/TodoContext";

type props = {
	title: string;
	inCustomList?: boolean;
};

export default (props: props) => {
	const { deleteList } = useContext<IDispatchers>(TodoDispatcherContext);
	const { push } = useHistory();
	const { id = "" } = useParams();
	const { inCustomList = false } = props;

	return (
		<div className="flex items-center justify-between">
			<h1 className="text-2xl font-bold text-gray-700 mb-4 mt-8">
				{props.title}
			</h1>

			{inCustomList && (
				<button
					className="flex p-3 text-2xl hover:text-red-600 focus:outline-none"
					onClick={() => deleteList(id, push("/tasks"))}
				>
					<FiTrash />
				</button>
			)}
		</div>
	);
};
