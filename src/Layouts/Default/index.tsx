import React, { FC } from "react";
import { Sidebar, DashboardContent } from "../../Components";

const DefaultLayout: FC = ({ children }) => {
	return (
		<main className="flex">
			<Sidebar />
			<DashboardContent>{children}</DashboardContent>
		</main>
	);
};

export default DefaultLayout;
