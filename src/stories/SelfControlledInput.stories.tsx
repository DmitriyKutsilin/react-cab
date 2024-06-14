import {action} from "@storybook/addon-actions";
// import { OnOff } from './OnOff';
import React, {ChangeEvent, useRef, useState, MouseEvent} from "react";
import {OnOff} from "../components/OnOff/OnOff";

export default {
    title: "Self Controlled Input",
    // component: OnOff,
};

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
    return <input value={"Fixed value"}/>;
};
