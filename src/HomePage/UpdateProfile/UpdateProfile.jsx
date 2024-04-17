import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user,  currentUser, updateUserProfile, setLoading } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm();
    const form = "/updateProfile";

    useEffect(() => {

        if (currentUser) {
            setValue("fullName", currentUser.displayName);
            setValue("image", currentUser.photoURL);
        }
    }, [currentUser, setValue]);

    const onSubmit = (data) => {
        const { fullName, image } = data;


        updateUserProfile(fullName, image)
            .then(() => {
                setLoading(true)
                navigate(form);
            })
            .catch(error => {
                console.error("Error updating profile: ", error.message);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <h2 className="text-2xl my-10 text-center">Update Profile</h2>



            <div className="md:w-3/4 lg:w-1/2 mx-auto dark:bg-gray-50 dark:text-gray-800">
                <img src={user?.photoURL } alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{user?.displayName}</h2>
                    </div>
                </div>
            </div>


            <form onSubmit={handleSubmit(onSubmit)} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="input input-bordered"
                        {...register("fullName",{required: true})}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="input input-bordered"
                        {...register("image",{required: true})}
                    />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;