import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }

    const links = <>
        <li> <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to={'/updateProfile'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Update Profile</NavLink></li>
        <li><NavLink to={'/userProfile'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>User Profile</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Hotel-Lelo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to={'/login'}>
                            <button className="btn">Login</button>
                        </Link>
                    </div>

            }
        </div>
    );
};

export default Navbar;