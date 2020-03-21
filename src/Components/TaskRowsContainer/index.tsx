import React from 'react'

type props = {
    children: React.ReactNode
}

export default (props: props) => {
    return (
        <div className="flex-grow mb-10 overflow-y-auto">
            {props.children}
        </div>
    )
}