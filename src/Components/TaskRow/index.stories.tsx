import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import TaskRow from "../TaskRow";

export default { title: "Tasks Row", decorators: [withKnobs] };
export const TasksRows = () => (
	<TaskRow
		id={Date.now().toString()}
		task={text("task", "The task title")}
		done={boolean("Done?", false)}
		important={boolean("Important?", false)}
		myDay={boolean("My Day?", false)}
		onEdit={action("on-edit")}
		onDeleteClick={action("on-delete")}
	/>
);
