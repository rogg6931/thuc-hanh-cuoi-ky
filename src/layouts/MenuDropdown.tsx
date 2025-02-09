import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const MenuDropdown = () => {
    const { ...userForm } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    
    

    const notFound = useNavigate();

    useEffect(() => {
        const handleClickOut = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOut);
        return () => document.removeEventListener("mousedown", handleClickOut);
    }, []);

    return (
        <React.Fragment>
            <menu className="relative" ref={dropdownRef} >
                {/* avatar */}
                <img alt="avatar" src='../../src/assets/images/color.png' className="outline outline-gray-300 size-10 rounded-full cursor-pointer hover:outline-sky-300"  onClick={() => setIsOpen((prev) => !prev)} onMouseEnter={() => setIsOpen(true)} />

                {/* dropdown menu */}
                {isOpen && (
                    <div className="z-10 mt-2 w-32 rounded-xl shadow-lg dropdown-menu" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                        <div onClick={() => notFound('/404')} className="px-4 py-2 text-sm rounded-t-xl cursor-pointer">
                            Hồ sơ
                        </div>
                        
                        <button onClick={userForm.logout} className="text-start px-4 py-2 text-sm cursor-pointer size-full rounded-b-xl">
                            Đăng xuất
                        </button>
                    </div>
                )}
            </menu>
        </React.Fragment>
    );
};

export default MenuDropdown;
