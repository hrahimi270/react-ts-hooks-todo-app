import React from "react";

type props = {
	image: string;
	text: string;
};

export default (props: props) => {
	return (
		<div className="flex flex-col justify-center items-center h-full w-full">
			<img src={props.image} alt={props.text} className="max-w-lg" />
			<p className="text-gray-600 text-xl">{props.text}</p>
		</div>
	);
};
