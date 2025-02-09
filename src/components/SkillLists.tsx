import React from "react";
import Platform from "./Platform";
import Tools from "./Tools";
import Frameworks from "./Frameworks";
import ProgramLangs from "./ProgramLangs";

const SkillList = () => {
    const titleSkill = [
        {
            title: 'Ngôn ngữ - Định dạng',
            component: <ProgramLangs />,
        },
        {
            title: 'Framework - Thư viện',
            component: <Frameworks />,
        },
        {
            title: 'Nền tảng',
            component: <Platform />,
        },
        {
            title: 'Công cụ',
            component: <Tools />,
        }
    ]

    return (
        <React.Fragment>
            <div className="grid col-span-full">
                {titleSkill.map((item, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-lg font-semibold underline underline-offset-4 mb-4">
                            {item.title}
                        </h3>

                        <div className=" grid grid-cols-4 gap-4 place-items-center rounded-xl p-4 font-content">
                            {item.component}
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default SkillList;
