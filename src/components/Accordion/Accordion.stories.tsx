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
const onCLickCallback = action('user with ID was clicked')

const items = [
    {title: 'Dmitriy', value: 1},
    {title: 'Valera', value: 2},
    {title: 'Artem', value: 3},
]

export const CollapsedAccordion = () => {
    return (
        <Accordion title={"Collapsed Accordion"}
                   items={[]}
                   collapsed={true}
                   onChange={onChangeCallback}
                   onClick={onCLickCallback}
        />
    )
}
export const UncollapsedAccordion = () => {
    return (
        <Accordion title={"Opened Accordion"}
                   items={items}
                   collapsed={false}
                   onChange={onChangeCallback}
                   onClick={onCLickCallback}
        />
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion title={"First Accordion"}
                   items={items}
                   collapsed={collapsed}
                   onChange={() => setCollapsed(!collapsed)}
                   onClick={onCLickCallback}
        />
    )
}