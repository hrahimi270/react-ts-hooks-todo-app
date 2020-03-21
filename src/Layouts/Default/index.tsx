import React, { FC } from "react";
import { Sidebar, DashboardContent } from "../../Components";

const DefaultLayout: FC = (props) => {
	return (
		<main className="flex">
			<Sidebar />
			<DashboardContent>{props.children}</DashboardContent>
		</main>
	);
};

export default DefaultLayout;
