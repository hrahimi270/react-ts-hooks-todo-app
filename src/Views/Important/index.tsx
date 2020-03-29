import React, { useContext } from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext, ITask } from "../../Context/TasksContext";
import importantImage from "../../Statics/empty-important.svg";

export default () => {
	const todoContext = useContext(TodoContext);
	const filteredTasks: ITask[] = todoContext.tasks.filter(
		(task: ITask) => task.important === true,
	);

	return (
		<>
			<ContentTitle title="Important" />
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
						image={importantImage}
						text="Your important tasks are empty!"
					/>
				)}
			</TaskRowsContainer>
			<AddTask onAdd={todoContext.addTask} isMyday={false} isImportant />
		</>
	);
};
