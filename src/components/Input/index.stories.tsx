import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./index";

export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template : ComponentStory <typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
   placeholder: "Please provide the input",
   maxLength: 10,
   style: {
       width: "200px",
       height: "100px",
   },
};