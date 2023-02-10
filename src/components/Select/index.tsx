import React from "react";
interface SelectProps {
    languages: string[];
    id: string;
    placeholder: string;
    style?: React.CSSProperties;
}
const Select = ({ ...props }: SelectProps) => {
    const { languages, id, placeholder, style } = props;
    return (
        <select id={id} placeholder={placeholder} style={style}>
            <option value=''> {placeholder}</option>
            {languages.map((language) => (
                <option key={language} value={language}>
                    {language}
                </option>
            ))}
        </select>
    );
};

export default Select;