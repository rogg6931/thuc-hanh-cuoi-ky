import React, { useContext } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import MenuDropdown from "./MenuDropdown";
import ModeDropdown from "../components/ModeDropdown";
import AuthContext from "../contexts/AuthContext";

const Header = () => {
    const navigate = useNavigate();

    const locate = useLocation();
    const isHome = locate.pathname === '/';
    const isRegister = locate.pathname === '/auth/register';
    const isLogin = locate.pathname === '/auth/login';

    const { ...userForm } = useContext(AuthContext)

    const mainMenu = [
        {
            link: '/',
            title: 'Trang chủ',
        },
        {
            link: '/about',
            title: 'Giới thiệu',
        },
        {
            link: '/contact',
            title: 'Liên hệ',
        },
    ]

    const contactForm = [
        {
            title: 'Đăng ký',
            link: '/auth/register',
            isFocus: isRegister,
        },
        {
            title: 'Đăng nhập',
            link: '/auth/login',
            isFocus: isLogin,
        },
    ]

    return (
        <React.Fragment>
            <nav id="main-menu" className={`flex justify-around items-center fixed top-0 size-full h-fit z-9 drop-shadow-xs ${isHome ? 'bg-transparent text-zinc-100' : 'bg-header'}`}>
                {/* Logo */}
                <div className="place-items-center">
                    <img src="../../src/assets/images/logo-chucmungnammoi.png" alt="Chuc mung nam moi" className="bg-cover h-16 cursor-pointer" 
                    onClick={() => navigate('/')} />
                </div>

                {/* Main-menu */}
                <div className="flex justify-evenly w-1/2 items-center font-semibold">
                    {mainMenu.map((item, index) => (
                        <NavLink key={index} to={item.link} end className={
                        ({isActive}) => isActive ? "text-rose-500 underline underline-offset-8" : "hover:text-cyan-500"} >
                            {item.title}
                        </NavLink>
                    ))}
                </div>

                {/* Login - logout - users  */}
                <div className="flex items-center content-center justify-evenly">
                    {userForm.isLogged ? (
                        <MenuDropdown />
                    ) : (
                        <div className="flex gap-2">
                            {contactForm.map((item, index) => (
                                <button key={index} className={`outline py-1 px-3 rounded-xl text-sm hover:bg-gradient-to-r from-teal-500 from-10% via-teal-600 via-30% to-teal-800 to-90% hover:text-white mx-4 cursor-pointer 
                                    ${item.isFocus ? 'bg-gradient-to-r from-teal-500 from-10% via-teal-600 via-30% to-teal-800 to-90% text-white mx-4 cursor-pointer' : ''}`} 
                                    onClick={() => navigate(`${item.link}`)}>
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* dark mode  */}
                <div className="rounded-xl border border-gray-300 size-fit items-center content-center">
                    <ModeDropdown/>
                </div>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};

export default Header;
