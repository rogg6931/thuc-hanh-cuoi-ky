import React from "react";
import { NavLink } from "react-router";

const NavContent = () => {
    return (
        <React.Fragment>
            <nav className="flex basis-2/3 justify-evenly"> {/* top-right */}
                <NavLink to={"/about"} end className={ ({ isActive }) => isActive ? "text-sky-700 font-semibold underline underline-offset-8" : "hover:text-cyan-600" } >
                        <span>Thông tin cá nhân</span>
                </NavLink>

                <NavLink to={"/about/experience"} className={ ({ isActive }) => isActive ? "text-sky-700 font-semibold underline underline-offset-8" : "hover:text-cyan-600" } >
                        <span>Kinh nghiệm</span>
                </NavLink>

                <NavLink to={"/about/skills"} className={ ({ isActive }) => isActive ? "text-sky-700 font-semibold underline underline-offset-8" : "hover:text-cyan-600" } >
                        <span>Kỹ năng</span>
                </NavLink>
            </nav>
        </React.Fragment>
    );
};

export default NavContent;
