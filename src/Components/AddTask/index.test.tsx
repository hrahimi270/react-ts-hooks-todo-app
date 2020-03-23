import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTask from "./index";
import { TaskType } from "../../context";

test("AddTask component", async () => {
	const onAddMock = jest.fn((data) => data);
	const { container } = render(
		<AddTask isImportant isMyday onAdd={onAddMock} />,
	);
	const placeholder = "Write new task and press Enter";
	const text = "Test task";
	const input = container.getElementsByTagName("input")[0];
	const button = container.getElementsByTagName("button")[0];

	// input should be empty first
	expect(input).toHaveAttribute("placeholder", placeholder);
	expect(input).toHaveAttribute("type", "text");
	expect(input).not.toHaveAttribute("value", text);

	// type a text in input
	await userEvent.type(input, text, { allAtOnce: true });

	// input shouldn't be empty after type
	expect(input).toHaveAttribute("value", text);

	// triger click event on button
	userEvent.click(button);

	// input should be empty after button clicks
	expect(input).not.toHaveAttribute("value", text);

	// testing result of adding task
	const result: TaskType = onAddMock.mock.results[0].value;
	expect(result).toBeTruthy();
	expect(result.task).toEqual(text);
});
