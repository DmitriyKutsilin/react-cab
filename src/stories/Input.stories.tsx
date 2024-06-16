import {action} from "@storybook/addon-actions";
// import { OnOff } from './OnOff';
import React, {ChangeEvent, useRef, useState, MouseEvent} from "react";
import {OnOff} from "../components/OnOff/OnOff";

export default {
    title: "Self Controlled Input",
    // component: OnOff,
};

const selectItems = [
    {title: 'Minsk', value: 1},
    {title: 'Moscow', value: 2},
    {title: 'Kiev', value: 3},
]

export const UncontrolledInput = () => {
    return <input/>;
};

export const UncontrolledInputTrackedState = () => {
    const [value, setValue] = useState("");
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    return <input value={value} onChange={changeTitle}/>;
};

export const UncontrolledInputTrackedRef = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement

        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>Save</button>
            <span>Actual value: {value}</span>
        </>
    );
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={onChange}/>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>
        </select>
    )
}