import React, { useContext } from "react";
import { DarkContext } from "../contexts/DarkContext";

const ModeDropdown = () => {
    const { ...mode } = useContext(DarkContext);

    return (
        <React.Fragment>
            <button onClick={mode.toggleTheme} className="px-4 py-2 text-sm cursor-pointer rounded-xl bg-gray-100 dark:bg-zinc-800 text-zinc-800 dark:text-gray-100">
                Đổi sang {mode.theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </React.Fragment>
    )
};

export default ModeDropdown;
