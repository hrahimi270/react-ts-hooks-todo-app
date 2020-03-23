import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import uniqid from "uniqid";
import TaskRow from "../TaskRow";

jest.mock("../RowCheckbox", () => {
	const RowCheckbox = () => <input type="checkbox" />;
	return RowCheckbox;
});

test("render TaskRow component", () => {
	const id = uniqid();
	const task = "Test Task";
	const onEditMock = jest.fn((id, edits) => ({ id, edits }));
	const onDeleteMock = jest.fn((id) => id);
	const { container } = render(
		<TaskRow
			id={id}
			task={task}
			done={false}
			onEdit={onEditMock}
			onDeleteClick={onDeleteMock}
		/>,
	);
	const importantButton = container.querySelectorAll("button")[0];
	const deleteButton = container.querySelectorAll("button")[2];

	expect(container).toMatchSnapshot();

	userEvent.click(importantButton);
	userEvent.click(deleteButton);

	const editResutl = onEditMock.mock.results[0].value;
	const deleteResult = onDeleteMock.mock.results[0].value;

	expect(editResutl.id).toEqual(id);
	expect(deleteResult).toEqual(id);
});
