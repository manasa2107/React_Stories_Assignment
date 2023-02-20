import React from "react";
interface InputProps {
    placeholder?: string;
    type?:string,
    maxLength: number,
    style?: React.CSSProperties;
}
const Input = ({ ...props }: InputProps) => {
    return (
        <input {...props} />
            );
};

export default Input;

