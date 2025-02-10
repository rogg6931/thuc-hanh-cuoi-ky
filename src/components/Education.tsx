import React from "react";
import { FaGraduationCap, FaRegCalendar } from "react-icons/fa";

const Education = () => {
    const education = [
        {
            logo: '/src/assets/images/logo-itc.png',
            college: 'Cao đẳng Công Nghệ Thông Tin Tp.HCM',
            iconCourse: <FaGraduationCap className="mr-1" />,
            course: 'Tin học ứng dụng',
            iconDay: <FaRegCalendar className="mr-1" />,
            day: '09/2019 ~ 05/2021'
        },
        {
            logo: '/src/assets/images/aptech.png',
            college: 'Aptech Việt Nam',
            iconCourse: <FaGraduationCap className="mr-1" />,
            course: 'CPISM',
            iconDay: <FaRegCalendar className="mr-1" />,
            day: '06/2024 - hiện tại'
        },
    ]

    return (
        <React.Fragment>
            <div>
                {education.map((item, index) => (
                    <div key={index} className="bg-items-cv flex items-center p-4 rounded-xl mb-2 font-content">
                        <img src={item.logo} alt="Itc College" className="mr-4 size-img-exp" />

                        <div className="flex flex-col">
                            <span className="font-semibold"> {item.college} </span>

                            <span className="flex items-center">
                                {item.iconCourse}
                                <span className="desc"> {item.course} </span>
                            </span>

                            <span className="flex items-center">
                                {item.iconDay}
                                <span className="font-date">{item.day}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Education;
