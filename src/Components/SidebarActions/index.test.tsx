import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SidebarActions from "../SidebarActions";
import { ListType } from "../../context";

test("render SidebarActions component", async () => {
	const onAddMock = jest.fn((data) => data);
	const { container, getByPlaceholderText } = render(
		<SidebarActions onAdd={onAddMock} />,
	);
	const listName = "Test List Name";
	const input = getByPlaceholderText("Add new list");
	const button = container.getElementsByTagName("button")[0];

	// type listName on input
	await userEvent.type(input, listName, { allAtOnce: true });

	// check if input's value is equal to listName
	expect(input).toHaveAttribute("value", listName);

	// trigger click on button to run handleAdd function
	userEvent.click(button);

	// check if input value is cleared by handleAdd function
	expect(input).not.toHaveAttribute("value", listName);

	// check if returned value from handleAdd function is equal to listName
	const result: ListType = onAddMock.mock.results[0].value;
	expect(result.name).toEqual(listName);
});
