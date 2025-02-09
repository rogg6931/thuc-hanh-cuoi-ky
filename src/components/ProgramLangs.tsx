import React from "react";
import ProgressBar from "./ProgressBar";
import { MdImageNotSupported } from "react-icons/md";

const ProgramLangs = () => {
    const prog = [
        {
            progress: <ProgressBar value={60} />,
            logo: '../../src/assets/images/html.png',
            desc: 'HTML5',
        },
        {
            progress: <ProgressBar value={60} />,
            logo: '../../src/assets/images/css.png',
            desc: 'CSS3',
        },
        {
            progress: <ProgressBar value={50} />,
            logo: '../../src/assets/images/javascript.png',
            desc: 'JavaScript',
        },
        {
            progress: <ProgressBar value={50} />,
            logo: '../../src/assets/images/typescript.png',
            desc: 'TypeScript',
        },
        {
            progress: <ProgressBar value={30} />,
            logo: '',
            desc: 'Tiếng Anh',
        }
    ]

    return (
        <React.Fragment>
            {prog.map((item, index) => (
                <div key={index} className="size-fit flex flex-col items-center bg-items-cv rounded-xl size-full p-2">
                    {item.progress}

                    <div className="flex items-center font-semibold mt-2">
                        {item.logo ? <img src={item.logo} alt={item.desc} className="size-img-skills" /> : <MdImageNotSupported className="text-gray-600" /> }
                        <span className="ml-1">{item.desc}</span>
                    </div>
                 </div>
            ))}
        </React.Fragment>
    );
};

export default ProgramLangs;
