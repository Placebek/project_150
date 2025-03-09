import React from 'react';

function ServicesCard({ photo, name, description }) {
    return (
        <div>
            <div className="relative w-[250px] h-[250px] shadow-card">
                <img
                    src={photo}
                    alt="Service"
                    className="z-10 w-[250px] h-[250px] object-cover"
                />
                <div className="absolute bottom-0 w-[250px] z-20">
                    <svg
                        className="w-[250px] h-[80px]"
                        viewBox="0 0 360 111"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M360 38.9927V127.798H0V30.2454L2.1394 24.6456C8.0526 9.16822 26.1787 -1.75143 42.6252 0.255921L360 38.9927Z"
                            fill="white"
                        />
                    </svg>
                    <div className="absolute top-7 left-3 w-full h-full flex flex-col justify-start items-start text-[#141414] font-eastman_regular z-30">
                        <div className="text-[15px] ">{name}</div>
                        <div className="text-[8px]">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesCard;