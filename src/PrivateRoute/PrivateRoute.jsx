import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({ children }) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return(
        <div>
            {children}
        </div>
    );

   

    // const { user, loading } = useContext(AuthContext);
    // const location = useLocation();
    // if (loading) {
    //     return <span className="loading loading-bars loading-lg"></span>
    // }
    // if (!user) {
    //     return children
    // }
    // return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;