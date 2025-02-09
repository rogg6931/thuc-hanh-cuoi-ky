import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

type FormValue = {
    email: string,
    password: string,
    confirm: string,
}

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValue> = () => {
        alert("Bingo, ban da dang ky thanh cong");
        navigate('/');
    };

    return (
        <React.Fragment>
            <h2 className="font-semibold text-3xl mb-6">
                Đăng ký
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
                    <label htmlFor="password">Mật khẩu</label>
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

                <div className="">
                    <label htmlFor="confirm-password">Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        id="confirm-password"
                        placeholder="••••••••"
                        {...register("confirm", {
                            required: "Vui lòng nhập lại mật khẩu",
                            minLength: {
                                value: 6,
                                message: "Mật khẩu không khớp, vui lòng nhập lại",
                            }
                        })}
                    />
                    {errors.confirm && <span className="error">{errors.confirm.message}</span>}
                </div>

                <div className="flex justify-between">
                    <div className="flex items-center content-center">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                aria-describedby="term"
                                type="checkbox"
                                className="size-4 rounded-xl"
                                required
                            />
                        </div>

                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="terms">
                                Tôi đồng ý với{" "}
                                <Link
                                    className="font-medium hover:text-blue-500 hover:underline"
                                    to="#">
                                    Điều khoản và Điều kiện
                                </Link>
                            </label>
                        </div>
                    </div>
                </div>
                
                <button
                    type="submit"
                    className="cursor-pointer outline rounded-xl text-center py-2 bg-sky-500 hover:bg-sky-600 text-white">
                    Đăng Ký
                </button>
                
                <div>
                    <Link to="/auth/login"
                        className="text-sm font-medium hover:underline hover:text-blue-500">
                        Đã có tài khoản, đăng nhập ngay?
                    </Link>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Register;
