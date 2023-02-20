import React from 'react';
import Select from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "select",
    component: Select,
} as ComponentMeta<typeof Select>;

 const Template : ComponentStory <typeof Select> = (args) => <Select {...args} />;

 export const dropdown = Template.bind({});
 dropdown.args = {
    languages: ["english", "hindi", "tamil"],
    id: "language",
    placeholder: "select language",
    style: {
        width: "200px",
    },
 };