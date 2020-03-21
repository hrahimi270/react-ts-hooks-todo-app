import React from 'react'

type props = {
    title: string;
    color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "gray";
}

export default (props: props) => {
    const { color = 'gray' } = props;
    const titleCLassName = `text-2xl font-bold text-${color}-700 mb-4 mt-8`;
    
    return (
        <h1 className={titleCLassName}>{props.title}</h1>
    )
}