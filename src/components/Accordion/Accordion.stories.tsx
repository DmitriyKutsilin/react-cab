import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import React, {useState} from "react";

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Accordion',
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

const onChangeCallback = action('accordion mode change event fired')

export const CollapsedAccordion = () => {
    return (
        <Accordion title={"First Accordion"}
                   collapsed={true}
                   onChange={onChangeCallback}/>
    )
}
export const UncollapsedAccordion = () => {
    return (
        <Accordion title={"First Accordion"}
                   collapsed={false}
                   onChange={onChangeCallback}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion title={"First Accordion"} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}/>
    )
}