import React from "react";
import { render } from "@testing-library/react";
import RowCheckbox from "../RowCheckbox";

test("render Checkbox component", () => {
	const labelText = "Test label";
	const labelFor = "test-label-id";
	const checked = false;
	const onChange = jest.fn();
	const { container, debug } = render(
		<RowCheckbox
			label={labelText}
			labelFor={labelFor}
			checked={checked}
			onChange={onChange}
		/>,
	);

	const input = container.getElementsByTagName("input")[0];
	const label = container.getElementsByTagName("label")[0];
	const span = container.getElementsByTagName("span")[1];

	expect(input).toHaveAttribute("type", "checkbox");
	expect(input).toHaveAttribute("id", labelFor);
	expect(label).toHaveAttribute("for", labelFor);
	expect(span).toHaveTextContent(labelText);
});
