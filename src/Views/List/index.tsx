import React from "react";
import { useParams } from 'react-router-dom'
import { ContentTitle, TaskRowsContainer, TaskRow, AddTask, EmptyState } from "../../Components";
import { TodoContext } from "../../context";
import tasksImage from "../../Statics/empty-tasks.svg";

export default () => {
	const { id } = useParams();

	return (
		<>
			<TodoContext.Consumer>
				{(({ lists }) => {
					const activeList = lists.filter((list) => list.id === id)[0];
					const name = activeList.name ? activeList.name : '';
					
					return <ContentTitle title={name} />;
				})}
			</TodoContext.Consumer>
			<TaskRowsContainer>
				<TodoContext.Consumer>
					{({ tasks, editTask, deleteTask }) => {
						const filteredTasks = tasks.filter(
							(task) => task.listID === id,
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
									text="There is no task in this list!"
								/>
							);
					}}
				</TodoContext.Consumer>
			</TaskRowsContainer>

			<TodoContext.Consumer>
				{({ addTask }) => (
					<AddTask
						onAdd={addTask}
						listID={id}
						isImportant={false}
						isMyday={false}
					/>
				)}
			</TodoContext.Consumer>
		</>
	);
};
