import useAuth from "../../Hooks/useAuth";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <div className="text-center mt-6">
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            <div className="max-w-xs md:w-3/4 lg:w-1/2 mx-auto dark:bg-gray-50 dark:text-gray-800">
                <img src={user.photoURL} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{user?.displayName}</h2>
                        <h2 className="text-xl font-semibold tracking-wide">Email: {user?.email}</h2>
                    </div>
                    <div className="flex text-2xl justify-around">
                        <FaFacebook></FaFacebook>
                        <FaGithub></FaGithub>
                        <FaTwitter></FaTwitter>
                        <FaYoutube></FaYoutube>
                        <FaWhatsapp></FaWhatsapp>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;