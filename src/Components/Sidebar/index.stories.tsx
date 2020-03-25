import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import Sidebar from "../Sidebar";

storiesOf("Sidebar", module)
	.addDecorator((story) => (
		<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
	))
	.add("Normal sidebar", () => <Sidebar />);
