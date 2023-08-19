import React from "react";
import ReactSwitch from "react-switch";

export default function ThemeToggle() {

    const handleToggleTheme =()=> {}

    const attributes = {
        uncheckedIcon: false,
        checkedIcon: false,
        onColor: '#131212',
        offColor: '#d0d0d0',
        checked: true,
        onChange: handleToggleTheme
    }

    return (
         <ReactSwitch {...attributes} />
    )
}