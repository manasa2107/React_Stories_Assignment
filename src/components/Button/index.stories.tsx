import React from "react";
//import {Button, Props} from './Button';
//import {Button} from './index';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
    title:'Button',
    component: Button,
}as ComponentMeta <typeof Button>;
const Template : ComponentStory <typeof Button> = (args) => <Button {...args} />;
/*
export const Primary = Template.bind({});
Primary.args ={
    variant : 'primary',
    children : 'hello',
};

*/

export const Blue = Template.bind({});
Blue.args = {
    label: "Click",
    backgroundColor: "Blue",
    size: "lg",
};

export const Curved = Template.bind({});
Curved.args = {
    label: "Click",
    backgroundColor: "Pink",
    size: "md",
    borderRadius: 20,
};

export const Small = Template.bind({});
Small.args = {
    label: "Click",
    backgroundColor: "red",
    size: "sm",
};

export const Large = Template.bind({});
Large.args = {
    label: "Click",
    backgroundColor: "red",
    size: "lg",
    color: "white",
};
