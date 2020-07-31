import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import { ImportantView, MyDayView, TasksView, ListView } from "./Views";
import { TodoProvider } from "./Context/TodoContext";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
	return (
		<TodoProvider>
			<ThemeProvider>
				<BrowserRouter>
					<DefaultLayout>
						<Switch>
							<Route
								path="/"
								render={() => <Redirect to="/tasks" />}
								exact
							/>
							<Route path="/tasks" component={TasksView} exact />
							<Route
								path="/tasks/list/:id"
								component={ListView}
							/>
							<Route
								path="/tasks/important"
								component={ImportantView}
							/>
							<Route path="/tasks/myday" component={MyDayView} />
							<Route render={() => <Redirect to="/tasks" />} />
						</Switch>
					</DefaultLayout>
				</BrowserRouter>
			</ThemeProvider>
		</TodoProvider>
	);
}

export default App;
