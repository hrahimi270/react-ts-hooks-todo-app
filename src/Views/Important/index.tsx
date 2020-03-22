import React from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext } from "../../context";
import importantImage from "../../Statics/empty-important.svg";

export default () => {
	return (
		<>
			<ContentTitle title="Important" />
			<TaskRowsContainer>
				<TodoContext.Consumer>
					{({ tasks, editTask, deleteTask }) => {
						const filteredTasks = tasks.filter(
							(task) => task.important === true,
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
								image={importantImage}
								text="Your important tasks are empty!"
							/>
						);
					}}
				</TodoContext.Consumer>
			</TaskRowsContainer>

			<TodoContext.Consumer>
				{({ addTask }) => (
					<AddTask
						onAdd={addTask}
						isMyday={false}
						isImportant
					/>
				)}
			</TodoContext.Consumer>
		</>
	);
};
