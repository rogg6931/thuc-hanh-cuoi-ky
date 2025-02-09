import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail, SiZalo } from "react-icons/si";
import { useUser } from "../contexts/UserContext";

const Socials = () => {
    const { contacts } = useUser();

    const socialIcon = [
        { 
            icon: <FaFacebook className="hover:text-blue-600" title="Facebook" />,
            link: contacts.facebook,
        },
        { 
            icon: <SiGmail className="hover:text-amber-600" title="Email" />,
            link: contacts.email,
        },
        { 
            icon: <SiZalo className="hover:text-blue-700" title="Zalo" />,
            link: contacts.zalo,
        },
        { 
            icon: <FaGithub className="ease-in duration-300" title="Github" />,
            link: contacts.github,
        },
    ]

    return (
        <React.Fragment>
            <div className="flex place-content-center text-2xl my-8">
                {socialIcon.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2 hover:scale-130 ease-in duration-300 cursor-pointer">
                        {item.icon}
                    </a>
            ))}
            </div>
        </React.Fragment>
    );
};

export default Socials;
