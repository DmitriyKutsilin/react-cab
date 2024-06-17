// @flow
import * as React from 'react';
import {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css';
import {log} from "node:util";

type Props = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
};

type ItemType = {
    title: string
    value: any
}

const items = [
    {title: 'Moscow', value: 1},
    {title: 'Minsk', value: 2},
    {title: 'Kiev', value: 3},
]

export const Select = ({value, items, onChange}: Props) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElValue, setHoveredElValue] = useState(value)

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElValue)

    useEffect( () => {
        setHoveredElValue(value);
    }, [ value ])

    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElValue) {
                    const pretendentEl = e.key === "ArrowDown" ? items[i + 1] : items[i - 1]
                    if (pretendentEl) {
                        onChange(pretendentEl.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={s.items} >
                    {items.map(i => <div onMouseEnter={() => setHoveredElValue(i.value)}
                                         className={s.item + " " + (hoveredItem === i ? s.selected : " " )}
                                         key={i.value}
                                         onClick={() => onItemClick(i.value)}
                    >{i.title}</div>)}
                </div>
            }
        </div>
    );
};