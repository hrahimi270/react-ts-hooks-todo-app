import React from "react";

type props = {
	children: React.ReactNode;
};

export default (props: props) => {
	return (
		<div className="flex-grow h-full mb-10 overflow-y-auto">
			{props.children}
		</div>
	);
};
