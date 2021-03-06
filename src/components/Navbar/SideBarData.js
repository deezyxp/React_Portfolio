import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [{
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
},
{
    title: 'Projects',
    path: '/Projects',
    icon: <AiIcons.AiOutlineBook />,
    className: 'nav-text'
},
{
    title: 'Contact',
    path: '/Contact',
    icon: <IoIcons.IoIosContact />,
    className: 'nav-text'
},
]