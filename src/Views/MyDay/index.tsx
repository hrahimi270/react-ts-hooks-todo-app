import React, { useContext } from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext, ITask } from "../../Context/TasksContext";
import mydayImage from "../../Statics/empty-myday.svg";

export default () => {
	const todoContext = useContext(TodoContext);
	const filteredTasks: ITask[] = todoContext.tasks.filter(
		(task: ITask) => task.myday === true,
	);

	return (
		<>
			<ContentTitle title="My Day" />
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
						image={mydayImage}
						text="Your daily tasks are empty!"
					/>
				)}
			</TaskRowsContainer>
			<AddTask onAdd={todoContext.addTask} isImportant={false} isMyday />
		</>
	);
};
