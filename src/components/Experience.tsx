import React from "react";
import Education from "../components/Education";
import Works from "../components/Works";

const Experience = () => {
    const exp = [
        {
            title: 'Học vấn',
            component: <Education />,
        },
        {
            title: 'Việc làm',
            component: <Works />,
        }
    ]

    return (
        <React.Fragment>
            <div className="grid col-span-full">
                {exp.map((item, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="mb-4 text-lg font-semibold underline underline-offset-4">{item.title}</h3>
                        {item.component}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Experience;
