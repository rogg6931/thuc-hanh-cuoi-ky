import React from "react";
import { MdImageNotSupported } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useUser } from "../contexts/UserContext";
import Info from "./Info";
import { SiGmail } from "react-icons/si";

const ContactInfo = () => {
    const { contacts } = useUser();

    const contactList = [
        { name: "duchieu.6931@gmail.com", desc: "Email", icon: SiGmail, link: `${contacts.email}` },
        { name: "facebook.com/dh.6931", desc: "Facebook", icon: FaFacebook, link: `${contacts.facebook}` },
        { name: "github.com/rogg6931", desc: "Github", icon: FaGithub, link: `${contacts.github}` },
        { name: "0792966931", desc: "Zalo", link: `${contacts.zalo}` },
    ];

    return (
        <React.Fragment>
            <div>
                <Info />

                <h3 className="mb-4 text-lg font-semibold underline underline-offset-4">Liên hệ</h3>
                <div className="grid grid-cols-2 gap-4 font-content">
                    {contactList.map((item, index) => (
                        <div key={index}>
                            <div id='socials-style' className="flex items-center p-2 rounded-xl bg-slate-300 hover:bg-gray-200">
                                <div className="p-2 bg-gray-200 rounded-xl mr-2 size-icon-info">
                                    {item.icon ? <item.icon /> : <MdImageNotSupported className="text-gray-400" /> }
                                </div>
                                <span>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <p> {item.name} </p>
                                    </a>
                                    <p className="desc text-gray-600 size-fit">{item.desc}</p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContactInfo;
