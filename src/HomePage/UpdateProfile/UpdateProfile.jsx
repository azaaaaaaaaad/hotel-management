import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
    const { currentUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm();
    const form ="/";

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
               
                navigate(form);
            })
            .catch(error => {
                console.error("Error updating profile: ", error.message);
            });
    };

    return (
        <div>
            <h2 className="text-2xl my-10 text-center">Edit Profile</h2>
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
                        {...register("fullName", { required: true })}
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
                        {...register("image")}
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