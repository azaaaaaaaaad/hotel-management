import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";



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
        .then(result=>{
            if (result.user) {
                navigate(from)
            }
        })
            .catch(error => {
                console.error(error);
            })
    }

    //     const navigate = useNavigate();
    //     const location = useLocation();

    //    const handleLogin = e => {
    //     e.preventDefault();
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     console.log(email, password);

    //     signIn(email, password)
    //     .then(result=>{
    //         console.log(result.user);

    //         //navigate after login
    //         navigate(location?.state ? location.state : '/')
    //     })
    //     .catch(error=>{
    //         console.error(error);
    //     })
    //    }

    return (
        <div className="hero min-h-screen bg-base-200">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Do not have an account <Link to={'/register'} className="text-purple-800 font-bold underline">Register</Link></p>
                    </form>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Login;