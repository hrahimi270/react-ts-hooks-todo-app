import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { TodoContext, TaskType, ListType, GroupType } from "./context";
import { DefaultLayout } from "./Layouts";
import { ImportantView, MyDayView, TasksView, ListView } from "./Views";

function App() {
	const [tasks, setTasks] = useState<Array<TaskType>>([]);
	const [lists, setLists] = useState<Array<ListType>>([]);
	const [groups, setGroups] = useState<Array<GroupType>>([]);

	// task functions
	function addTask(task: TaskType) {
		const newTasks = tasks.concat(task);

		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	function editTask(taskID: string, edits: TaskType) {
		const newTasks = tasks.map((task) => {
			if (task.id === taskID) {
				return {
					...task,
					...edits
				}
			} else return task;
		})

		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	function deleteTask(taskID: string) {
		const newTasks = tasks.filter((task) => task.id !== taskID);

		setTasks(newTasks);
		localStorage.setItem("tasks", JSON.stringify(newTasks));
	}

	// list functions
	function addList(list: ListType) {
		const newLists = lists.concat(list);

		setLists(newLists);
		localStorage.setItem("lists", JSON.stringify(newLists));
	}

	function editList(listID: string, edits: ListType) {
		const newLists = lists.map((list) => {
			if (list.id === listID) {
				return {
					...list,
					...edits
				}
			} else return list;
		})

		setLists(newLists);
		localStorage.setItem("lists", JSON.stringify(newLists));
	}

	function deleteList(listID: string) {
		const newLists = lists.filter((list) => list.id !== listID);

		setLists(newLists);
		localStorage.setItem("lists", JSON.stringify(newLists));
	}

	// group functions
	function addGroup(group: GroupType) {
		const newGroups = groups.concat(group);

		setGroups(newGroups);
		localStorage.setItem("groups", JSON.stringify(newGroups));
	}

	function editGroup(groupID: string, edits: GroupType) {
		const newGroups = groups.map((group) => {
			if (group.id === groupID) {
				return {
					...group,
					...edits
				}
			} else return group;
		})

		setGroups(newGroups);
		localStorage.setItem("groups", JSON.stringify(newGroups));
	}

	function deleteGroup(groupID: string) {
		const newGroups = groups.filter((group) => group.id !== groupID);

		setGroups(newGroups);
		localStorage.setItem("groups", JSON.stringify(newGroups));
	}

	useEffect(() => {
		const localTasks = localStorage.getItem("tasks");
		if (localTasks) {
			setTasks(JSON.parse(localTasks));
		}

		const localLists = localStorage.getItem("lists");
		if (localLists) {
			setLists(JSON.parse(localLists));
		}

		const localGroups = localStorage.getItem("groups");
		if (localGroups) {
			setGroups(JSON.parse(localGroups));
		}
	}, []);

	return (
		<TodoContext.Provider
			value={{
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
			}}
		>
			<BrowserRouter>
				<DefaultLayout>
					<Switch>
						<Route
							path="/"
							render={() => <Redirect to="/tasks" />}
							exact
						/>
						<Route path="/tasks" component={TasksView} exact />
						<Route path="/tasks/list/:id" component={ListView} />
						<Route
							path="/tasks/important"
							component={ImportantView}
						/>
						<Route path="/tasks/myday" component={MyDayView} />
					</Switch>
				</DefaultLayout>
			</BrowserRouter>
		</TodoContext.Provider>
	);
}

export default App;
