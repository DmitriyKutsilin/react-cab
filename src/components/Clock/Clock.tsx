import * as React from 'react';
import {useEffect, useState} from 'react';
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type Props = {
    mode: "digital" | "analog"
};


export type ClockViewPropsType = {
    date: Date
}

export const get2digitsString = (num: number) => {
    return num < 10 ? "0" + num : num
}

export const Clock = ({mode}: Props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    // const get2digitsString = (num: number) => {
    //     return num < 10 ? "0" + num : num
    // }

    const secondsString = get2digitsString(date.getSeconds())
    const minutesString = get2digitsString(date.getMinutes())
    const hoursString = get2digitsString(date.getHours())

    let view;

    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
            view = <DigitalClockView date={date}/>
            break;
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};

