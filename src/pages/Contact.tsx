import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValue = {
    lastName: string,
    firstName: string,
    email: string,
    phone: number,
    message: string,
    button: string,
};

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValue>();

    const onSubmit: SubmitHandler<FormValue> = () => {
        alert("Bingo, ban da gui lien he thanh cong !");
        reset();
    };

    return (
        <React.Fragment>
            <div className="container place-items-center">
                <h2 className="font-semibold text-4xl mb-12">Liên hệ với tôi</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="form-contact size-5/10 p-8 gap-8 border rounded-xl border-gray-400 bg-cv drop-shadow-xl">
                    {/* Họ */}
                    <div className="grid-last-name">
                        <label htmlFor="firstName">Họ</label>
                        <input
                            id="firstName"
                            {...register("lastName", {
                                required: true,
                                minLength: 2,
                            })}
                            placeholder="Le Pham"
                        />
                        {errors.lastName && <span className="error">Vui lòng nhập tối thiểu 2 ký tự</span>}
                    </div>

                    {/* Tên */}
                    <div className="grid-first-name">
                        <label htmlFor="lastName">Tên</label>
                        <input
                            id="lastName"
                            {...register("firstName", { required: true })}
                            placeholder="Gia Hung"
                        />
                        {errors.firstName && <span className="error">Vui lòng nhập tên</span>}
                    </div>

                    {/* Email */}
                    <div className="grid-email">
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
                            placeholder="Email"
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>

                    {/* Số điện thoại */}
                    <div className="grid-phone">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                            id="phone"
                            {...register("phone", {
                                required: "Vui lòng nhập số điện thoại",
                                minLength: {
                                    value: 10,
                                    message: "Số điện thoại sai định dạng.",
                                },
                            })}
                            placeholder="0912345678"
                        />
                        {errors.phone && <span className="error">{errors.phone.message}</span>}
                    </div>

                    {/* Tin nhắn */}
                    <div className="grid-message">
                        <label htmlFor="message">Nội dung liên hệ</label>
                        <textarea
                            id="message"
                            {...register("message", {
                                required: "Vui lòng nhập nội dung góp ý",
                                minLength: {
                                    value: 10,
                                    message: "Nội dung phải có ít nhất 10 ký tự",
                                },
                            })}
                            placeholder="Nhập nội dung"
                            className="h-32"
                        />
                        {errors.message && <span className="error">{errors.message.message}</span>}
                    </div>

                    <button type="submit" className="grid-button h-15 w-30 place-self-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 drop-shadow-lg">
                        Gửi
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Contact;
