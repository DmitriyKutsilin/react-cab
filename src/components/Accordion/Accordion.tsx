import React from "react";

type AccordionProps = {
    title: string
    collapsed: boolean
    onChange: (value: boolean) => void
}

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

export const Accordion = ({title, collapsed, onChange}: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={title} onClick={() => onChange(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionTitle = ({title, onClick}: AccordionTitleProps) => {
    return (
        <h3 onClick={onClick}
            style={{cursor: 'pointer'}}>{title}</h3>
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