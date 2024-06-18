// @flow
import * as React from 'react';
import {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";
import {reducer} from "./reducer";

type AccordionProps = {
    title: string
}

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

export const SelfControlledAccordion = ({title}: AccordionProps) => {
    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={title} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={title} onClick={() => dispatch({type: "TOGGLE-COLLAPSED"})}/>
            { !state.collapsed && <AccordionBody/> }
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