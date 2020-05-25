import React, { useContext } from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext, TodoDispatcherContext, IState, IDispatchers, ITask } from "../../Context/TodoContext";
import tasksImage from "../../Statics/empty-tasks.svg";

export default () => {
	const { editTask, deleteTask, addTask } = useContext<IDispatchers>(TodoDispatcherContext)
	const { tasks } = useContext<IState>(TodoContext);
	const filteredTasks: ITask[] = tasks.filter(
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
								onEdit={editTask}
								onDeleteClick={deleteTask}
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
				onAdd={addTask}
				isImportant={false}
				isMyday={false}
			/>
		</>
	);
};
