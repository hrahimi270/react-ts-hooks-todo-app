import React from "react";
import { ContentTitle, TaskRowsContainer, TaskRow } from "../../Components";

export default () => {
	return (
		<>
			<ContentTitle title="My custom list" />
			<TaskRowsContainer>
				<TaskRow
					task="My Day task"
					id="1243"
					done={false}
					important={true}
					myDay={true}
					onDone={() => {}}
					onImportantClick={() => {}}
					onMyDayClick={() => {}}
				/>
			</TaskRowsContainer>
		</>
	);
};
