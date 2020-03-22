import { createContext } from "react";

export type TaskType = {
	id: string;
	task: string;
	done: boolean;
	important: boolean;
	myday: boolean;
	inList: boolean;
};

export type ListType = {
	id: string;
	tasks: Array<TaskType>;
	inGroup: boolean;
};

const tasks: Array<TaskType> = [];
const lists: Array<ListType> = [];

const addTask: Function = () => {};
const editTask: Function = () => {};
const deleteTask: Function = () => {};

const addList: Function = () => {};
const editList: Function = () => {};
const deleteList: Function = () => {};

export const TodoContext = createContext({
	tasks,
	lists,

	addTask,
	editTask,
	deleteTask,

	addList,
	editList,
	deleteList
});
