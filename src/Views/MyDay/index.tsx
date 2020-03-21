import React from "react";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext } from "../../context";
import mydayImage from "../../Statics/empty-myday.svg";

export default () => {
	return (
		<>
			<ContentTitle title="My Day" />
			<TaskRowsContainer>
				<TodoContext.Consumer>
					{({ tasks, editTask, deleteTask }) => {
						const filteredTasks = tasks.filter(
							(task) => task.myday === true,
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
								image={mydayImage}
								text="Your daily tasks are empty!"
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
						isMyday
					/>
				)}
			</TodoContext.Consumer>
		</>
	);
};
