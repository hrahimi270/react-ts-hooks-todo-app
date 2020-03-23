import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { TodoContext, TaskType, ListType } from "./context";
import { DefaultLayout } from "./Layouts";
import { ImportantView, MyDayView, TasksView, ListView } from "./Views";

function App() {
	const [tasks, setTasks] = useState<Array<TaskType>>([]);
	const [lists, setLists] = useState<Array<ListType>>([]);

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
					...edits,
				};
			} else return task;
		});

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
					...edits,
				};
			} else return list;
		});

		setLists(newLists);
		localStorage.setItem("lists", JSON.stringify(newLists));
	}

	function deleteList(listID: string, fallback: Function) {
		// first, delete this list's tasks
		const newTasks = tasks.filter((task) => task.listID !== listID);

		// second, delete the list itself
		const newLists = lists.filter((list) => list.id !== listID);

		// aply new states
		setLists(newLists);
		setTasks(newTasks);

		// update localstorage
		localStorage.setItem("lists", JSON.stringify(newLists));
		localStorage.setItem("tasks", JSON.stringify(newTasks));

		// run the fallback
		fallback && fallback();
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
	}, []);

	return (
		<TodoContext.Provider
			value={{
				tasks,
				lists,
				addTask,
				editTask,
				deleteTask,
				addList,
				editList,
				deleteList,
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
						<Route render={() => <Redirect to="/tasks" />} />
					</Switch>
				</DefaultLayout>
			</BrowserRouter>
		</TodoContext.Provider>
	);
}

export default App;
