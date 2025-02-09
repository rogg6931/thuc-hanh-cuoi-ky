import React from "react";
import ProgressBar from "./ProgressBar";
import { MdImageNotSupported } from "react-icons/md";

const Tools = () => {
    const tool = [
        {
            progress: <ProgressBar value={70} />,
            logo: '../../src/assets/images/vscode.png',
            desc: 'VS Code',
        },
        {
            progress: <ProgressBar value={60} />,
            logo: '../../src/assets/images/github.png',
            desc: 'Github',
        },
        {
            progress: <ProgressBar value={65} />,
            logo: '../../src/assets/images/figma.png',
            desc: 'Figma',
        },
        {
            progress: <ProgressBar value={50} />,
            logo: '../../src/assets/images/vite.png',
            desc: 'Vite',
        },
    ]

    return (
        <React.Fragment>
            {tool.map((item, index) => (
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

export default Tools;
