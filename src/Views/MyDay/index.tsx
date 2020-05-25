import React, { useContext } from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext, TodoDispatcherContext, ITask, IState, IDispatchers } from "../../Context/TodoContext";
import mydayImage from "../../Statics/empty-myday.svg";

export default () => {
	const { editTask, deleteTask, addTask } = useContext<IDispatchers>(TodoDispatcherContext)
	const { tasks } = useContext<IState>(TodoContext);
	const filteredTasks: ITask[] = tasks.filter(
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
								onEdit={editTask}
								onDeleteClick={deleteTask}
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
			<AddTask onAdd={addTask} isImportant={false} isMyday />
		</>
	);
};
