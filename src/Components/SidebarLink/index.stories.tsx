import React from 'react'
import { FiHome } from 'react-icons/fi'
import SidebarLink from '../SidebarLink'

export default { title: 'SidebarLink' };
export const withIcon = () => (
    <SidebarLink
        text="Home"
        path="/"
        icon={<FiHome />}
    />
)
export const withoutIcon = () => (
    <SidebarLink
        text="Home"
        path="/"
    />
)
export const withColor = () => (
    <SidebarLink
        text="Home"
        color="orange"
        path="/"
        icon={<FiHome />}
    />
)