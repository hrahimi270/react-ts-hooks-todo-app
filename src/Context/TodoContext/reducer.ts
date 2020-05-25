import {
	INIT_TASKS,
	ADD_TASK,
	DELETE_TASK,
	EDIT_TASK,
	INIT_LISTS,
	ADD_LIST,
	DELETE_LIST,
	EDIT_LIST,
} from "./constants";
import { IState, IAction, ITask, IList } from "./types";

export default (state: IState, action: IAction): IState => {
	switch (action.type) {
		case INIT_TASKS:
			return {
				...state,
				tasks: action.payload,
			};

		case ADD_TASK:
			const newTasks = state.tasks.concat(action.payload);

			localStorage.setItem("tasks", JSON.stringify(newTasks));
			
			return {
				...state,
				tasks: newTasks,
			};

		case EDIT_TASK: {
			const newTasks: ITask[] = state.tasks.map((task: ITask) => {
				if (task.id === action.payload.id) {
					return {
						...task,
						...action.payload.edits,
					};
				} else return task;
			});

			localStorage.setItem("tasks", JSON.stringify(newTasks));

			return {
				...state,
				tasks: newTasks,
			};
		}

		case DELETE_TASK: {
			const newTasks: ITask[] = state.tasks.filter(
				(task: ITask) => task.id !== action.payload,
			);

			localStorage.setItem("tasks", JSON.stringify(newTasks));

			return {
				...state,
				tasks: newTasks,
			};
		}

		case INIT_LISTS:
			return {
				...state,
				lists: action.payload,
			};

		case ADD_LIST:
			const newLists = state.lists.concat(action.payload);

			localStorage.setItem("lists", JSON.stringify(newLists));

			return {
				...state,
				lists: newLists,
			};

		case EDIT_LIST: {
			const newLists: IList[] = state.lists.map((list: IList) => {
				if (list.id === action.payload.id) {
					return {
						...list,
						...action.payload.edits,
					};
				} else return list;
			});

			localStorage.setItem("lists", JSON.stringify(newLists));

			return {
				...state,
				lists: newLists,
			};
		}

		case DELETE_LIST: {
			// Note: in deleteing lists, we first delete its tasks, then we delete the list itself.
			const newTasks = state.tasks.filter(
				(task: ITask) => task.listID !== action.payload,
			);
			const newLists: IList[] = state.lists.filter(
				(list: IList) => list.id !== action.payload,
			);

			localStorage.setItem("tasks", JSON.stringify(newTasks));
			localStorage.setItem("lists", JSON.stringify(newLists));

			return {
				...state,
				tasks: newTasks,
				lists: newLists,
			};
		}

		default:
			return state;
	}
};
