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

export type GroupType = {
	id: string;
	lists: Array<ListType>;
};

const tasks: Array<TaskType> = [];
const lists: Array<ListType> = [];
const groups: Array<GroupType> = [];

const addTask: Function = () => {};
const editTask: Function = () => {};
const deleteTask: Function = () => {};

const addList: Function = () => {};
const editList: Function = () => {};
const deleteList: Function = () => {};

const addGroup: Function = () => {};
const editGroup: Function = () => {};
const deleteGroup: Function = () => {};

export const TodoContext = createContext({
	tasks,
	lists,
	groups,

	addTask,
	editTask,
	deleteTask,

	addList,
	editList,
	deleteList,

	addGroup,
	editGroup,
	deleteGroup,
});
