import React from "react";
import { render } from "@testing-library/react";
import EmptyState from "../EmptyState";
import { join } from "path";

test("render EmptyState component", () => {
	const text = "Empty state Title";
	const image = join(__dirname, "../../Statics/empty-tasks.svg");
	const { getByText, getByAltText } = render(
		<EmptyState text={text} image={image} />,
	);

	expect(getByText(text)).toHaveTextContent(text);
	expect(getByAltText(text)).toHaveAttribute("src", image);
});
