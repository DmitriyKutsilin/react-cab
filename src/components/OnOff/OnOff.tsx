// @flow
import * as React from 'react';
import {useState} from "react";

type Props = {};

export const OnOff = ({}: Props) => {
    const [status, setStatus] = useState(false)

    const changeStatus = (value: boolean) => {
        setStatus(value)
    }

    const onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: status ? 'green' : 'white',
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: status ? 'white' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border: "1px solid black",
        marginLeft: '10px',
        backgroundColor: status ? 'green' : 'red'
    }

    return (
        <div style={{boxSizing: 'border-box'}}>
            <button onClick={() => setStatus(true)} style={onStyle}>On</button>
            <button onClick={() => setStatus(false)} style={offStyle}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};