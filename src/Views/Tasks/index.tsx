import React from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext } from "../../context";
import tasksImage from "../../Statics/empty-tasks.svg";

export default () => {
	return (
		<>
			<ContentTitle title="Tasks" />
			<TaskRowsContainer>
				<TodoContext.Consumer>
					{({ tasks, editTask, deleteTask }) => {
						const filteredTasks = tasks.filter(
							(task) => task.inList === false,
						);
						return filteredTasks.length ? (
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
							);
					}}
				</TodoContext.Consumer>
			</TaskRowsContainer>

			<TodoContext.Consumer>
				{({ addTask }) => (
					<AddTask
						onAdd={addTask}
						isImportant={false}
						isInList={false}
						isMyday={false}
					/>
				)}
			</TodoContext.Consumer>
		</>
	);
};
