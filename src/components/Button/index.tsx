import React from 'react';

/*
export interface Props  {
    children : React.ReactNode;
    variant?: 'primary' | 'secondary';
}
export const Button = ({children, ...props}: Props) => {
    return (
        <button
         {...props} 
        style={{
            backgroundColor: props.variant === 'primary' ? 'blue': 'gray',
             color:'white',
             border:'none',
             borderRadius: 100,
             padding: 10,
             cursor:'pointer',
            }}>
            {children}
        </button>
    )
}
*/
interface ButtonTypes {
    label?: string;
    backgroundColor?: string;
    borderRadius?: number;
    color?: string;
    size?: string;
}
let scale: number;
const Button =({
  ...props
}: ButtonTypes) => {
    if (props.size === "sm") scale = 1.4;
    if (props.size === "md") scale = 2;
    if (props.size === "lg") scale = 4;
    const style = {
        backgroundColor : props.backgroundColor,
        padding: `${scale * 5}px ${scale * 10}px`,
        border: "1px solid black",
        color : props.color,
        fontSize: `${props.size}px`,
    };
    return <button style={style}>{props.label}</button>;
};
export default Button;
