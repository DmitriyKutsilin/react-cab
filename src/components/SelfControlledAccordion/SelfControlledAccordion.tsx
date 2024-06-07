// @flow
import * as React from 'react';
import {useState} from "react";

type AccordionProps = {
    title: string
    // collapsed: boolean
}

type AccordionTitleProps = {
    title: string
}

export const SelfControlledAccordion = ({title}: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={title}/>
            <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? 'Свернуть' : 'Развернуть'}</button>
            { collapsed && <AccordionBody/> }
        </div>
    )
}

const AccordionTitle = ({title}: AccordionTitleProps) => {
    return (
        <h3>{title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}