import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionProps = {
    title: string
    collapsed: boolean
    onChange: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

type AccordionBodyProps = {
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = ({title, collapsed, onChange, items, onClick}: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={title} onClick={() => onChange(!collapsed)}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}

const AccordionTitle = ({title, onClick}: AccordionTitleProps) => {
    return (
        <h3 onClick={onClick}
            style={{cursor: 'pointer'}}>{title}</h3>
    )
}

const AccordionBody = ({items, onClick}: AccordionBodyProps) => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <li key={index} onClick={() => {onClick(item.value)}}>{item.title}</li>
                )
                })
            }
        </ul>
    )
}