import React from 'react'
import classNames from 'classnames';
import { FiStar, FiSun } from 'react-icons/fi'
import RowCheckbox from '../RowCheckbox'

type props = {
    id: string;
    task: string;
    done: boolean;
    important?: boolean;
    myDay?: boolean;
    onDone: Function;
    onImportantClick: Function;
    onMyDayClick: Function;
}

export default (props: props) => {
    const buttonsBaseClasses = 'text-xl rounded-full p-3 focus:outline-none focus:bg-gray-200 hover:bg-gray-200';
    const importantButtonClasses = classNames(buttonsBaseClasses, {
        'text-gray-600': !props.important,
        'hover:text-purple-600': !props.important,
        'focus:text-purple-600': !props.important,
        'text-purple-600': props.important,
        'hover:text-purple-400': props.important,
        'focus:text-purple-400': props.important,
    })
    const myDayButtonClasses = classNames(buttonsBaseClasses, {
        'text-gray-600': !props.myDay,
        'hover:text-orange-600': !props.myDay,
        'focus:text-orange-600': !props.myDay,
        'text-orange-600': props.myDay,
        'hover:text-orange-400': props.myDay,
        'focus:text-orange-400': props.myDay,
    })

    function importantClicked() {
        const { id } = props;
        props.onImportantClick(id);
    }

    function myDayClicked() {
        const { id } = props;
        props.onMyDayClick(id);
    }

    return (
        <div className="flex items-center w-full mb-1 rounded-md bg-gray-300 py-1 px-3">
            <RowCheckbox
                label={props.task}
                checked={props.done}
                labelFor="test"
                onChange={props.onDone}
            />

            <div className="ml-auto flex items-center">
                <button className={importantButtonClasses} onClick={importantClicked}>
                    <FiStar />
                </button>
                <button className={myDayButtonClasses} onClick={myDayClicked}>
                    <FiSun />
                </button>
            </div>
        </div>
    )
}