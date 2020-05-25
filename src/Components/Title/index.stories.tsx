import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import ContentTitle from ".";

storiesOf("Content Title", module)
	.addDecorator((story) => (
		<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
	))
	.add("default lists page", () => <ContentTitle title="Important" />)
	.add("custom lists page", () => (
		<ContentTitle title="A Custom List" inCustomList />
	));
