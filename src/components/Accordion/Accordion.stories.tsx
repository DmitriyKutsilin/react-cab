import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import React, {useState} from "react";

//👇 This default export determines where your story goes in the story list
export default {
    component: Accordion,
};

// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         title: "Hello",
//         collapsed: true,
//         onChange: () => {},
//     }
// }

const onChangeCallback = action('on change')

export const CollapsedAccordion = () => {
    return (
        <Accordion title={"First Accordion"}
                   collapsed={true}
                   onChange={onChangeCallback}/>
    )
}
export const OpenedAccordion = () => {
    return (
        <Accordion title={"First Accordion"}
                   collapsed={false}
                   onChange={() => {}}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion title={"First Accordion"} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
    )
}