import { ITask } from "../Context/TodoContext";

export function isImportantTask(task: ITask) {
	return task.important;
}

export function isMydayTask(task: ITask) {
	return task.myday;
}

export function isGeneralTask(task: ITask) {
	return !task.listID;
}

export function filterCustomListTasks(id: string) {
	return function isCustomListTask(task: ITask) {
		return task.listID === id;
	};
}
