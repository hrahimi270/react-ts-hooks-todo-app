import React, { useReducer, useEffect, useContext, FC } from "react";
import { TodoContext, TodoDispatcherContext } from "./context";
import reducer from "./reducer";
import {
	INIT_TASKS,
	ADD_TASK,
	DELETE_TASK,
	EDIT_TASK,
	INIT_LISTS,
	ADD_LIST,
	DELETE_LIST,
	EDIT_LIST,
	INITIAL_STATE,
} from "./constants";
import { ITask, IList, IState, IDispatchers } from "./types";

export const TodoProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	function addTask(task: ITask) {
		dispatch({
			type: ADD_TASK,
			payload: task,
		});
	}

	function editTask(taskID: string, edits: ITask) {
		dispatch({
			type: EDIT_TASK,
			payload: {
				id: taskID,
				edits,
			},
		});
	}

	function deleteTask(taskID: string) {
		dispatch({
			type: DELETE_TASK,
			payload: taskID,
		});
	}

	function addList(list: IList) {
		dispatch({
			type: ADD_LIST,
			payload: list,
		});
	}

	function editList(listID: string, edits: IList) {
		dispatch({
			type: EDIT_LIST,
			payload: {
				id: listID,
				edits,
			},
		});
	}

	function deleteList(listID: string, fallback: Function) {
		dispatch({
			type: DELETE_LIST,
			payload: listID,
		});

		fallback && fallback();
	}

	useEffect(() => {
		const localTasks = localStorage.getItem("tasks");
		if (localTasks) {
			dispatch({
				type: INIT_TASKS,
				payload: JSON.parse(localTasks),
			});
		}

		const localLists = localStorage.getItem("lists");
		if (localLists) {
			dispatch({
				type: INIT_LISTS,
				payload: JSON.parse(localLists),
			});
		}
	}, []);

	return (
		<TodoContext.Provider
			value={{
				...state,
			}}
		>
			<TodoDispatcherContext.Provider
				value={{
					addTask,
					editTask,
					deleteTask,
					addList,
					editList,
					deleteList,
				}}
			>
				{children}
			</TodoDispatcherContext.Provider>
		</TodoContext.Provider>
	);
};

export const useTodoContext = (): IState => {
	return useContext(TodoContext);
};

export const useTodoDispatchContext = (): IDispatchers => {
	return useContext(TodoDispatcherContext);
};
