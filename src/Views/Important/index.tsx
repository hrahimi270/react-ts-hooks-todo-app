import React, { useContext } from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import {
	TodoContext,
	TodoDispatcherContext,
	ITask,
	IDispatchers,
	IState,
} from "../../Context/TodoContext";
import importantImage from "../../Statics/empty-important.svg";

export default () => {
	const { editTask, deleteTask, addTask } = useContext<IDispatchers>(
		TodoDispatcherContext,
	);
	const { tasks } = useContext<IState>(TodoContext);
	const filteredTasks: ITask[] = tasks.filter(
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
								onEdit={editTask}
								onDeleteClick={deleteTask}
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
			<AddTask onAdd={addTask} isMyday={false} isImportant />
		</>
	);
};
