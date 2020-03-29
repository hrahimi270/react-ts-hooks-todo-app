import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import SidebarLink from "../SidebarLink";

storiesOf("Sidebar Link", module)
	.addDecorator((story) => (
		<MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
	))
	.add("With Icon", () => (
		<SidebarLink text="Home" path="/" icon={<FiHome />} />
	))
	.add("without Icon", () => <SidebarLink text="Home" path="/" />)
	.add("with Color", () => (
		<SidebarLink text="Home" color="orange" path="/" icon={<FiHome />} />
	));
