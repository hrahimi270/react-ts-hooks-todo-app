import React from 'react';

type props = {
    path: string;
    text: string;
    color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "gray";
    icon?: React.ReactNode;
}

export default (props: props) => {
    const { color = 'gray' } = props;
    const linkClassName = `w-11/12 flex items-center px-6 py-3 mb-2 mx-auto rounded-md hover:bg-${color}-100`;
    const iconClassName = `mr-2 text-${color}-500`;

    return (
        <a href={props.path} className={linkClassName}>
            {props.icon ? (<div className={iconClassName}>
                {props.icon}
            </div>) : null}
            {props.text}
        </a>
    )
}