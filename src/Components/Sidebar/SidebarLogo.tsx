import React from 'react'
import logo from "../../Statics/logo.svg";

export default () => {
    return (
        <div className="flex justify-center mb-4">
            <img src={logo} alt="Todo App" className="max-w-full h-16" />
        </div>
    )
}