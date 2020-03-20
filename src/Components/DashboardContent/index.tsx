import React from 'react'

type props = {
    children: React.ReactNode
}

export default (props:props) => {
    return (
        <section className="relative md:ml-64 py-8 px-4 bg-gray-100 min-h-screen w-full">
            {props.children}
        </section>
    )
}