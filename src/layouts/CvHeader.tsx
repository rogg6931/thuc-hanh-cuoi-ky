import React from "react";
import NavContent from "./NavContent";

const CvHeader = () => {
    return (
        <React.Fragment>
            {/* top-header */}
            <div className="flex text-center items-center h-16 border-b border-gray-300"> 
                <span className="text-2xl basis-1/3 h-full content-center border-r border-gray-300">Frontend Developer</span>

                {/* navbar cv */}
                <NavContent />
            </div>
        </React.Fragment>
    );
};

export default CvHeader;
