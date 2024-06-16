// @flow
import * as React from 'react';
import {useState} from "react";

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
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onChangeHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <div onChange={onChangeHandler}>{value}</div>
            {}
        </div>
    );
};