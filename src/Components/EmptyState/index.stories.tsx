import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import EmptyState from "../EmptyState";
import emptyTasksImage from "../../Statics/empty-tasks.svg";
import emptyImportantTasks from "../../Statics/empty-important.svg";
import emptyMydayTasks from "../../Statics/empty-myday.svg";
import emptyListsTask from "../../Statics/empty-list-tasks.svg";

export default { title: "Empty states", decorators: [withKnobs] };
export const EmptyTasks = () => (
	<EmptyState
		image={emptyTasksImage}
		text={text("text", "Your Tasks are empty!")}
	/>
);
export const EmptyImportantTasks = () => (
	<EmptyState
		image={emptyImportantTasks}
		text={text("text", "Your Important Tasks are empty!")}
	/>
);
export const EmptyMyDayTasks = () => (
	<EmptyState
		image={emptyMydayTasks}
		text={text("text", "Your Daily Tasks are empty!")}
	/>
);
export const EmptyCustomLists = () => (
	<EmptyState
		image={emptyListsTask}
		text={text("text", "There is no task in this list!")}
	/>
);
