import React from "react";
import Socials from "../components/Socials";
import { useLocation } from "react-router";
import '../styles/cv.css'
import ContactInfo from "../components/ContactInfo";
import Experience from "../components/Experience";
import SkillList from "../components/SkillLists";
import Person from "../components/Person";
import WrapperMotion from "../utils/WrapperMotion";

const CvContent = () => {
    const locate = useLocation();
    const exp = locate.pathname === '/about/experience'
    const skill = locate.pathname === '/about/skills'

    return (
        <React.Fragment>
            <div className="flex"> 
                {/* Left */}
                <div className="basis-1/3 border-r border-gray-300 h-[682]">
                    {/* thong tin - Info.tsx - PersonProps */}
                    <Person />
                    {/* socials */}
                    <Socials />
                </div>

                {/* Right */}
                <div className="basis-2/3">
                    <div id="cv-style" className="bg-white outline outline-slate-200 hover:outline-slate-300 rounded-xl p-4 m-4 h-[650px] scrollbar-style" style={{overflowY: "scroll"}}>
                        {exp ? <WrapperMotion><Experience/></WrapperMotion>
                        : skill ? <WrapperMotion><SkillList/></WrapperMotion> 
                        : <WrapperMotion><ContactInfo/></WrapperMotion>}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CvContent;
