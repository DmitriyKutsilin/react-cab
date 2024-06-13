// @flow
import * as React from 'react';

type Props = {
    status: boolean
    setOnOffStatus: (value: boolean) => void
};

export const OnOff = ({status, setOnOffStatus}: Props) => {

    const changeStatus = (value: boolean) => {
        setOnOffStatus(value)
    }

    const onStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: status ? 'green' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black',
        backgroundColor: status ? 'white' : 'red',
        cursor: 'pointer',
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
            <button onClick={() => changeStatus(true)} style={onStyle}>On</button>
            <button onClick={() => changeStatus(false)} style={offStyle}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};