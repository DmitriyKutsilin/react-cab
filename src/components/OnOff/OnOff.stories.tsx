import { action } from '@storybook/addon-actions';
import { OnOff } from './OnOff';
import React, {useState} from "react";

export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff status={true} setOnOffStatus={callback}/>
export const OffMode = () => <OnOff status={false} setOnOffStatus={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)

    return (
        <OnOff status={value} setOnOffStatus={setValue}/>
    )
}

