import * as React from 'react';
import {useState} from "react";

type Props = {
    onChange?: (value: boolean) => void
    defaultValue?: boolean
};

export const SelfControlledOnOff = ({onChange, defaultValue}: Props) => {
    const [on, setOn] = useState<boolean>(defaultValue ? defaultValue : false)

    const onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: "1px solid black",
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div style={{boxSizing: 'border-box'}}>
            <button onClick={() => setOn(true)} style={onStyle}>On</button>
            <button onClick={() => setOn(false)} style={offStyle}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};