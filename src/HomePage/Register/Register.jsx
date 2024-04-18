import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser, updateUserProfile, setLoading } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    setLoading(true)
    const navigate = useNavigate();
    const from = '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const password = watch("password");

    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;

        // Verify password criteria
        if (!/(?=.*[A-Z])/.test(password) || !/(?=.*[a-z])/.test(password) || password.length < 6) {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long');
            return;
        }

        // Proceed with user creation and profile update
        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, image)
                    .then(() => {
                        navigate(from);
                        toast.success('user successfully created')
                    });
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="full name" className="input input-bordered" required {...register("fullName", { required: true })} />
                            {errors.fullName && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="image" placeholder="image url" className="input input-bordered" {...register("image")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="w-full input input-bordered"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                    })}
                                />
                                <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <span>Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account <Link to={'/login'} className="text-purple-800 font-bold underline">Login</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}></ToastContainer>
        </div>
    );
};

export default Register;
