import React from 'react'
import {
	FiStar,
	FiSun,
	FiHome,
	FiList,
} from "react-icons/fi";
import { TodoContext } from '../../context';
import SidebarLink from "../SidebarLink";

export default () => {
    return (
        <div className="flex-grow mb-4">
            <SidebarLink
                path="/tasks/important"
                text="Important"
                color="purple"
                icon={<FiStar />}
            />
            <SidebarLink
                path="/tasks/myday"
                text="My Day"
                color="orange"
                icon={<FiSun />}
            />
            <SidebarLink
                path="/tasks"
                text="Tasks"
                color="blue"
                icon={<FiHome />}
            />
            <span
                className="block w-11/12 bg-gray-200 my-2 mx-auto"
                style={{ height: 2 }}
            />
            <TodoContext.Consumer>
                {(({ lists }) => {
                    return (
                        lists.map((list) => {
                            return (
                                <SidebarLink
                                    key={list.id}
                                    path={`/tasks/list/${list.id}`}
                                    text={list.name}
                                    icon={<FiList />}
                                />
                            )
                        })
                    )
                })}
            </TodoContext.Consumer>
        </div>
    )
}