import React from "react";
import { useParams } from "react-router-dom";
import {
	ContentTitle,
	TaskRowsContainer,
	TaskRow,
	AddTask,
	EmptyState,
} from "../../Components";
import { TodoContext, ListType } from "../../context";
import listTasksImage from "../../Statics/empty-list-tasks.svg";

export default () => {
	const { id } = useParams();

	function getListName(lists: Array<ListType>): string {
		const activeList: ListType = lists.filter((list) => list.id === id)[0];

		const name =
			activeList && activeList.name ? activeList.name : "undefined";

		return name;
	}

	return (
		<>
			<TodoContext.Consumer>
				{({ lists }) => {
					const name = getListName(lists);

					return <ContentTitle title={name} />;
				}}
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
								image={listTasksImage}
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
