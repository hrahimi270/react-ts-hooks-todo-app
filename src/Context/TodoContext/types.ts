export interface ITask {
	id: string;
	task: string;
	done: boolean;
	important: boolean;
	myday: boolean;
	listID: string;
}

export interface IList {
	id: string;
	name: string;
}

export interface IState {
	tasks: ITask[];
	lists: IList[];
}

export interface IAction {
	type: string;
	payload: any;
}

export interface IDispatchers {
	addTask: () => void;
	editTask: () => void;
	deleteTask: () => void;
	addList: () => void;
	editList: () => void;
	deleteList: (listID: string, fallback: void) => void;
}
