import React from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import {
	useTodoContext,
	useTodoDispatchContext,
	ITask,
} from "../../Context/TodoContext";
import { isGeneralTask } from "../../Utils";
import tasksImage from "../../Statics/empty-tasks.svg";

export default () => {
	const { editTask, deleteTask, addTask } = useTodoDispatchContext();
	const { tasks } = useTodoContext();

	const filteredTasks: ITask[] = tasks.filter(isGeneralTask);

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
			<AddTask onAdd={addTask} isImportant={false} isMyday={false} />
		</>
	);
};
