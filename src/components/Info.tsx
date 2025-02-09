import React from "react";
import { useUser } from "../contexts/UserContext";


const Info = () => {
    const { ...person } = useUser();
    
    const age = (birthday?: string) => {
        if (!birthday) return "undefined";
        const birthYear = new Date(birthday).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    };

    const formatDay = (birthday?: string) => {
        if (!birthday) return "Không xác định";
        const date = new Date(birthday);
        return `${date.getDate().toString().padStart(2, "0")}/${( date.getMonth() + 1 )
            .toString()
            .padStart(2, "0")}/${date.getFullYear()}`;
    };

    const in4 = [{
        desc: `Họ tên: ${person.name}`,
        age: `Tuổi: ${age(person.birth)}`,
        birth: `Sinh nhật: ${formatDay(person.birth)}`,
        phone: `Số điện thoại: ${person.phone}`,
        address: `Địa chỉ: quận ${person.address?.district}, ${person.address?.province}, ${person.address?.country}`,
        text: `"Mong muốn có được cơ hội học hỏi, thử sức với các dự án thực tế nhằm nâng cao tư duy, kỹ năng chuyên môn để phát triển bản thân và doanh nghiệp."`
    }]

    return (
        <React.Fragment>
            <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold underline underline-offset-4">Về tôi</h3>
                <div className="bg-items-cv rounded-xl p-4">
                    {in4.map((item, index) => (
                        <div key={index} className="grid grid-cols-2 grid-rows-2 grid-item-info">
                            <span> {item.desc} </span>
                            <span> {item.age} </span>
                            <span> {item.birth} </span>
                            <span> {item.phone} </span>
                            <span> {item.address} </span>
                            <span className="mt-8">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Info;