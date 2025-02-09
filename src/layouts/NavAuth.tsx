import React from "react";
import { Outlet } from "react-router";

const NavAuth = () => {
    return (
        <React.Fragment>
            <div className="container place-items-center">
                <div className="rounded-xl outline p-8 w-2/5 outline-gray-300">
                    <Outlet/>
                </div>
            </div>
        </React.Fragment>
    )
};

export default NavAuth