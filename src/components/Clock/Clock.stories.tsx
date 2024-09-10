import React, {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
};

export const AnalogClockDemo = () => {
    return <Clock mode={"analog"}/>
}
export const DigitalClockDemo = () => {
    return <Clock mode={"digital"}/>
}