import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const { signInUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state || '/'


    const onSubmit = (data) => {
        const { email, password } = data;


        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from)
                    toast.success('Login successful');
                }
            })
            .catch(error => {
                console.error(error);
                toast.error('Invalid email or password.');
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true })} />
                            {errors.password && <span>This field is required</span>}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Do not have an account <Link to={'/register'} className="text-purple-800 font-bold underline">Register</Link></p>
                    </form>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}></ToastContainer>
        </div>
    );
};

export default Login;