import React, { FC } from "react";
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
import { isMydayTask, getListNameOfOneTask } from "../../Utils";
import mydayImage from "../../Statics/empty-myday.svg";

const MyDayView: FC = () => {
	const { editTask, deleteTask, addTask } = useTodoDispatchContext();
	const { tasks, lists } = useTodoContext();
	const filteredTasks: ITask[] = tasks.filter(isMydayTask);

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
								sourceList={getListNameOfOneTask(
									task.listID,
									lists,
								)}
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

export default MyDayView;
