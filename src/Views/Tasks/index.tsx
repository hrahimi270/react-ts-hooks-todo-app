import React, { useContext } from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext, ITask } from "../../Context/TodoContext";
import tasksImage from "../../Statics/empty-tasks.svg";

export default () => {
	const todoContext = useContext(TodoContext);
	const filteredTasks: ITask[] = todoContext.tasks.filter(
		(task: ITask) => task.listID === "",
	);

	return (
		<>
			<ContentTitle title="Tasks" />
			<TaskRowsContainer>
				{filteredTasks.length ? (
					filteredTasks.map((task) => {
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
						image={tasksImage}
						text="Your tasks are empty!"
					/>
				)}
			</TaskRowsContainer>
			<AddTask
				onAdd={todoContext.addTask}
				isImportant={false}
				isMyday={false}
			/>
		</>
	);
};
