import { Link } from "react-router-dom";
import { CiCirclePlus, CiHeart, CiPhone, CiUser } from "react-icons/ci";

const isLoggedIn = true;


const Navigation = () => {
  return (
    <div className="w-full h-16 flex overflow-hidden bg-sky-700 fixed">
        <div className="w-[20%] h-full max-lg:w-[30%] max-sm:w-[35%]">
            <Link to="/" className="w-full h-full flex items-center justify-center">
                <img src="/images/logo.png" alt="Car Tire Logo" className="w-12 h-12 max-sm:hidden" />
                <h2 className="ml-3 text-white text-2xl font-bold font-roboto hover:text-slate-400 max-sm:ml-5">MarioCars</h2>
            </Link>
        </div>
        <div className="w-[80%] h-full flex items-center justify-end pr-10 max-lg:w-[70%] max-sm:pr-1 max-sm:w-[65%]">
            <Link to="/saved" className="text-white text-[30px] mx-2 p-2 nav-btn-hover">
                <CiHeart />
            </Link>
            {/* Hide in mobile contact icon */}
            <Link to="/contact" className="text-white text-[30px] mx-2 p-2 nav-btn-hover max-sm:hidden">
                <CiPhone />
            </Link>
            {/* Show profile icon in mobile if logged in */}
            <Link to="/" className={`text-white text-[30px] mx-2 p-2 nav-btn-hover sm:hidden ${isLoggedIn ? "" : "hidden"}`}>
                <CiUser />
            </Link>
            <Link to="/create" className={`text-white text-[30px] mr-4 ml-2 p-2 nav-btn-hover ${isLoggedIn ? "" : "hidden"}`}>
                <CiCirclePlus />
            </Link>
            {/* Check if user is logged in if not show log in button */}
            <Link to="/login" className={`bg-white text-lg px-6 py-1 text-sky-700 no-underline max-sm:mr-2 ${isLoggedIn ? "hidden" : ""}`}>
                Влез
            </Link>
            {/* Logged in user nav */}
            <Link className={`flex items-center text-white text-lg no-underline max-sm:hidden ${isLoggedIn ? "" : "hidden"}`}>
                <CiUser className="mx-2"/>
                <h3>marionikolovauto</h3>
            </Link>
        </div>
    </div>
  )
}

export default Navigation