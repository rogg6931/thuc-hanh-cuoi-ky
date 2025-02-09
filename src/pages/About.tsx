import React from "react";
import CvHeader from "../layouts/CvHeader";
import CvContent from "../layouts/CvContent";

const About = () => {
    return (
        <React.Fragment>
            <div className="container hover:bg-about content-center place-items-center"> {/* container */}
                <div className="h-4/5 w-5/6 bg-cv rounded-xl drop-shadow-lg"> {/* box tong */}
                    <CvHeader />
                    <CvContent />
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
