import React from "react";
import { FaMotorcycle, FaRegCalendar } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

const Works = () => {
    const works = [
        {
            logo: `${import.meta.env.BASE_URL}src/assets/images/image.png`,
            company: 'CyberCafé Cao Nguyên Xanh',
            iconJob: <GrUserManager className="mr-1" />,
            job: 'Kinh doanh tại nhà',
            iconDay: <FaRegCalendar className="mr-1" />,
            day: '05/2014 - 12/2017'
        },
        {
            logo: `${import.meta.env.BASE_URL}src/assets/images/shopeefood-logo.png`,
            company: 'Công ty cổ phần Foody',
            iconJob: <FaMotorcycle className="mr-1" />,
            job: 'Giao đồ ăn',
            iconDay: <FaRegCalendar className="mr-1" />,
            day: '03/2018 - 03/2024'
        },
        {
            logo: `${import.meta.env.BASE_URL}src/assets/images/gamehome.png`,
            company: 'Gamehome Esports Complex',
            iconJob: <GrUserManager className="mr-1" />,
            job: 'Quản lý - phục vụ',
            iconDay: <FaRegCalendar className="mr-1" />,
            day: '06/2023 - 10/2024'
        },
    ]

    return (
        <React.Fragment>
            {works.map((item, index) => (
                <div key={index} className="bg-items-cv flex items-center bg-gray-200 p-4 rounded-xl mb-2 font-content">
                    <img src={item.logo} alt="Cyber Game" className="size-img-exp mr-4" />

                    <div className="flex flex-col">
                        <span className="font-semibold">{item.company}</span>

                        <span className="flex items-center">
                            {item.iconJob}
                            <span className="desc">{item.job}</span>
                        </span>

                        <span className="flex items-center">
                            {item.iconDay}
                            <span className="font-date">{item.day}</span>
                        </span>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Works;
