import { action } from '@storybook/addon-actions';

import { SelfControlledAccordion } from './SelfControlledAccordion';
import React, {useState} from "react";

export default {
    title: 'Self Controlled Accordion',
    component: SelfControlledAccordion,
};

const onChangeCallback = action('accordion mode change event fired')

export const ModeChanging = () => {

    return (
        <SelfControlledAccordion title={"First Accordion"}/>
    )
}