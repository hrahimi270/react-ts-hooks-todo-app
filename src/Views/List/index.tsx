import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext, IList, ITask } from "../../Context/TasksContext";
import listTasksImage from "../../Statics/empty-list-tasks.svg";

export default () => {
	const { id } = useParams();
	const todoContext = useContext(TodoContext);
	const filteredTasks: ITask[] = todoContext.tasks.filter(
		(task: ITask) => task.listID === id,
	);

	function getListName(): string {
		const activeList: IList = todoContext.lists.filter(
			(list: IList) => list.id === id,
		)[0];

		const name =
			activeList && activeList.name ? activeList.name : "undefined";

		return name;
	}

	return (
		<>
			<ContentTitle inCustomList title={getListName()} />
			<TaskRowsContainer>
				{filteredTasks.length ? (
					filteredTasks.map((task: ITask) => {
						return (
							<TaskRow
								key={task.id}
								task={task.task}
								id={task.id}
								done={task.done}
								important={task.important}
								myDay={task.myday}
								onEdit={todoContext.editTask}
								onDeleteClick={todoContext.deleteTask}
							/>
						);
					})
				) : (
					<EmptyState
						image={listTasksImage}
						text="There is no task in this list!"
					/>
				)}
			</TaskRowsContainer>

			<AddTask
				onAdd={todoContext.addTask}
				listID={id}
				isImportant={false}
				isMyday={false}
			/>
		</>
	);
};
