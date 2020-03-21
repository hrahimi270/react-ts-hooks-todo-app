import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { TodoContext, TaskType, ListType, GroupType } from './context';
import { DefaultLayout } from './Layouts'
import { ImportantView, MyDayView, TasksView, ListView } from './Views'

function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([]);
  const [lists, setLists] = useState<Array<ListType>>([]);
  const [groups, setGroups] = useState<Array<GroupType>>([]);

  // task functions
  function addTask(task: TaskType) {
    const newTasks = tasks.concat(task);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  function editTask(taskID: string) { }

  function deleteTask(taskID: string) { }

  // list functions
  function addList(list: ListType) { }

  function editList(listID: string) { }

  function deleteList(listID: string) { }

  // group functions
  function addGroup(group: GroupType) { }

  function editGroup(groupID: string) { }

  function deleteGroup(groupID: string) { }

  useEffect(() => {
    const localTasks = localStorage.getItem('tasks');
    if (localTasks) {
      setTasks(JSON.parse(localTasks))
    }
  }, [])

  return (
    <TodoContext.Provider value={{
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
      deleteGroup
    }}>
      <BrowserRouter>
        <DefaultLayout>
          <Switch>
            <Route
              path="/"
              render={() => <Redirect to="/tasks" />}
              exact
            />
            <Route
              path="/tasks"
              component={TasksView}
              exact
            />
            <Route
              path="/tasks/list/:id"
              component={ListView}
            />
            <Route
              path="/tasks/important"
              component={ImportantView}
            />
            <Route
              path="/tasks/myday"
              component={MyDayView}
            />
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    </TodoContext.Provider>
  );
}

export default App;
