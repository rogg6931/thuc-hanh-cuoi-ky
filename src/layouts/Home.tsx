import React from "react";
import { useNavigate } from "react-router";
import { useUser } from "../contexts/UserContext";

const Home = () => {
    const navigate = useNavigate();
    const { name, classRoom } = useUser();

    return (
        <React.Fragment>
            <div className="bg-home h-screen text-gray-300">
                <div className="absolute top-[50%] left-[20%] translate-[-50%] font-semibold w-fit">
                    <div className="">
                        <p className="text-5xl mb-2">{name}</p>
                        <p className="text-2xl">{classRoom}</p>
                    </div>

                    <div className="mt-8">
                        <button type="button" className="cursor-pointer btn mr-4 hover:bg-gradient-to-r from-teal-500 from-10% via-teal-600 via-30% to-teal-800 to-90%" onClick={() => navigate('/about')}>
                            Về tôi
                        </button>
                        <button type="button" className="cursor-pointer btn hover:bg-gradient-to-r from-teal-500 from-10% via-teal-600 via-30% to-teal-800 to-90%" onClick={() => navigate('/contact')}>
                            Liên hệ với tôi
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
