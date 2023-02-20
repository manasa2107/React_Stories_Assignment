import React from "react";
import Text from './index';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title:'text',
    component: Text,
}as ComponentMeta <typeof Text>;
const Template : ComponentStory <typeof Text> = (args) => <Text {...args} />;
export const Heading = Template.bind({});
Heading.args ={
    text : 'welcome',
    style : {
     color: 'green',
    }
};