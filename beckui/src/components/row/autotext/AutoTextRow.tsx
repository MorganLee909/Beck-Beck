import React from "react";
import {BaseDropdown} from "../../dropdown/Dropdown";

export interface AutoTextRowProps{
    something: string;
};

const menuItems = [
    {label: "one"},
    {label: "two"},
    {label: "three"}
];

export const AutoTextRow: React.FC<AutoTextRowProps> = (props) => {
    return (
        <div>
            <Dropdown
                type="BaseDropdown"
                state="default"
                value={1}
                menuItems={menuItems}
            />
        </div>
    );
}
