import { IList } from '../Context/TodoContext'

export function getListOfTask(listID: string) {
    return function isListOfTask(list: IList) {
        return list.id === listID;
    }
}

export function getListNameOfOneTask(taskID: string, lists: IList[]): string {
    if (!taskID) return '';

    const isListOfTask = getListOfTask(taskID);
    const list = lists.filter(isListOfTask)[0];

    return list.name;
}