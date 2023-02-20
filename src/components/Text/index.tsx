import React from 'react';
interface TextProps {
    text?:string;
    style?: React.CSSProperties;
}
const Text = ({ ...props }: TextProps) => {
    return (
        <h1 style={{...props.style}} >{props.text}</h1>
    )
    }
export default Text;
