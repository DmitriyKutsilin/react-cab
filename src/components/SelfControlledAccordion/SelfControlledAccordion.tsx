// @flow
import * as React from 'react';
import {useState} from "react";

type AccordionProps = {
    title: string
}

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

export const SelfControlledAccordion = ({title}: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={title} onClick={() => setCollapsed(!collapsed)}/>
            { !collapsed && <AccordionBody/> }
        </div>
    )
}

const AccordionTitle = ({title, onClick}: AccordionTitleProps) => {
    return (
        <h3 onClick={() => onClick()} style={{cursor: 'pointer'}}>{title}</h3>
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