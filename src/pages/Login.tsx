import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

type FormValue = {
    email: string,
    password: string,
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const navigate = useNavigate();
    const { login } = useContext(AuthContext)

    const onSubmit: SubmitHandler<FormValue> = () => {
        login(null);
        alert("Bingo, ban da dang nhap thanh cong !");
        navigate('/');
    };

    return (
        <React.Fragment>
            <h2 className="font-semibold text-3xl mb-6">
                Đăng nhập      
            </h2>

            <form className="grid gap-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "Vui lòng nhập địa chỉ email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email sai định dạng",
                            },
                        })}
                        placeholder="abc@gmail.com"
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <div className="">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        {...register("password", {
                            required: "Vui lòng nhập mật khẩu",
                            minLength: {
                                value: 6,
                                message: "Mật khẩu quá ngắn, tối thiểu 6 ký tự",
                            }
                        })}
                    />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </div>
                
                <div className="flex justify-between">
                    <div className="flex items-center content-center">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="size-4 rounded-xl"
                                required
                            />
                        </div>

                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="remember">
                                Nhớ tôi
                            </label>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="cursor-pointer outline rounded-xl text-center py-2 bg-sky-500 hover:bg-sky-600 text-white">
                    Đăng nhập
                </button>
                
                <div>
                    <Link to="/auth/register"
                        className="text-sm font-medium hover:underline hover:text-blue-500">
                        Chưa có tài khoản, đăng ký ngay?
                    </Link>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Login;
