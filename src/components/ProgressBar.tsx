import React, { useEffect, useState } from "react";

export type ProgressBarProps = {
    value?: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0 }) => {
    const radius = 40;
    const strokeWidth = 5;

    {/* khai bao % duong tron, max 100% min 0 */}
    const percent = Math.min(Math.max(value, 0), 100);
    {/* khai bao duong tron */}
    const [offset, setOffset] = useState(0);
    {/* Chu vi duong tron */}
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        {/* tinh toan chu vi */}
        const progressOffset = circumference - (circumference * percent) / 100;
        {/* update duong tron khi chu vi thay doi */}
        setOffset(progressOffset);
    }, [percent, circumference]);

    return (
        <React.Fragment>
            <svg className="size-24" transform={`rotate(-90 0 0)`}>
                {/* background */}
                <circle
                    className="stroke-slate-400"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                />

                {/* thanh progress */}
                <circle
                    className={`stroke-cyan-500 transition-all duration-500 ease-out ${percent <= 30 ? 'stroke-red-400' : percent <= 50 ? 'stroke-yellow-500' : percent <= 80 ? 'stroke-emerald-500' : 'stroke-blue-500' }`}
                    cx="50%"
                    cy="50%"
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />

                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className='font-percent font-bold'
                    writingMode="tb">
                    {percent}%
                </text>
            </svg>
        </React.Fragment>
    );
};

export default ProgressBar;
