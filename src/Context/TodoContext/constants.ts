import { IState } from "./types";

export const INIT_TASKS = "INIT_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const INIT_LISTS = "INIT_LISTS";
export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const EDIT_LIST = "EDIT_LIST";

export const INITIAL_STATE: IState = {
	tasks: [],
	lists: [],
};

export const INITIAL_DISPATCHERS = {
	addTask: () => {},
	editTask: () => {},
	deleteTask: () => {},
	addList: () => {},
	editList: () => {},
	deleteList: () => {},
	
}