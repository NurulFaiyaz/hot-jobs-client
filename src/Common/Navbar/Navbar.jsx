import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import hotJobsLogo from '../../assets/FabIcon/hotJobsLogo.png'
const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
        .then(()=>{
            console.log("signout successful")
        })
        .catch(err =>{
            console.log(err)
        })
    }


    const links = <>

        <NavLink to={'/'}>Home</NavLink>
        <NavLink>Parent</NavLink>
        <NavLink>Item 3</NavLink>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="text-xl">
                <img className="w-12" src={hotJobsLogo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user?.email ?
                        <><Link onClick={handleSignOut} className="btn">Sign Out</Link></> :
                        <>
                            <Link to={'/register'} className="underline hover:text-blue-500">Register</Link>
                            <Link to={'/signIn'} className="btn">Log In</Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;