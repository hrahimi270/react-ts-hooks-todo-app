import React, { FC } from "react";

const TaskRowsContainer: FC = ({ children }) => {
	return (
		<div className="flex-grow h-full mb-10 overflow-y-auto">{children}</div>
	);
};

export default TaskRowsContainer;
