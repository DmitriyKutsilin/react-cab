import { action } from '@storybook/addon-actions';
import { SelfControlledOnOff } from './SelfControlledOnOff';
import React, {useState} from "react";

export default {
    title: 'Self Controlled OnOff',
    component: SelfControlledOnOff,
}

const callback = action('on or off clicked')

export const OnMode = () => <SelfControlledOnOff defaultValue={true} onChange={callback}/>
export const OffMode = () => <SelfControlledOnOff defaultValue={false} onChange={callback}/>

