import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useAuth()
    return (
        <>
            <div className="divider">Social Logins</div>
            <div>
                <div className="flex justify-around mb-4">
                    <div>
                        <button
                            onClick={() => googleLogin()}
                            className="btn">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                    <div>
                        <button
                        onClick={()=>githubLogin()}
                         className="btn">
                            <FaGithub></FaGithub>
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;