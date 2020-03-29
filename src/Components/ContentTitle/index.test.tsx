import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContentTItle from "../ContentTitle";
import { TodoContext, INITIAL_STATE } from "../../Context/TodoContext";

jest.mock("react-router-dom", () => ({
	useHistory: () => ({
		push: jest.fn(),
	}),
	useParams: () => ({
		id: Date.now(),
	}),
}));

function renderContentTItle(
	title: string,
	inCustomList: boolean,
	deleteList: Function,
) {
	const addTask: Function = jest.fn();
	const editTask: Function = jest.fn();
	const deleteTask: Function = jest.fn();
	const addList: Function = jest.fn();
	const editList: Function = jest.fn();

	return render(
		<TodoContext.Provider
			value={{
				...INITIAL_STATE,
				addTask,
				editTask,
				deleteTask,
				addList,
				editList,
				deleteList,
			}}
		>
			<ContentTItle title={title} inCustomList={inCustomList} />
		</TodoContext.Provider>,
	);
}

test("ContentTitle component without list", () => {
	const title = "My Custom list";
	const { container, getByText } = renderContentTItle(title, false, () => {});
	const h1 = getByText(title);
	const button = container.querySelector("button");

	expect(h1).toHaveTextContent(title);
	expect(button).toBeNull();
});

test("ContentTitle component with list", () => {
	const deleteListMock = jest.fn((data) => data);
	const title = "My Custom list";
	const { container, getByText } = renderContentTItle(
		title,
		true,
		deleteListMock,
	);
	const h1 = getByText(title);
	const button = container.querySelector("button");

	expect(h1).toHaveTextContent(title);
	expect(button).not.toBeNull();
	userEvent.click(container.getElementsByTagName("button")[0]);

	const result = deleteListMock.mock.results[0].value;
	expect(result).toBeTruthy();
});
