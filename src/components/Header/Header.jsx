import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="bg-transparent absolute w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">PATHSEEKWAVE</h1>
          <div>
            <Link to="/" className="text-white text-lg font-bold mr-10">
              Home
            </Link>
            {/* <Link to="#" className="text-white text-lg font-bold mr-10">
              News
            </Link>
            <Link to="#" className="text-white text-lg font-bold mr-10">
              Destination
            </Link> */}
            <Link to="#" className="text-white text-lg font-bold mr-10">
              Blog
            </Link>
            <Link to="/contact" className="text-white text-lg font-bold mr-10">
              Contact {user?.displayName}
            </Link>

            {user ? (
              <>
                <>
                  {user.email}
                  <FaUserCircle></FaUserCircle>
                  {/* <img
                    src={user.photoURL}
                    alt="Profile"
                    className="rounded-full h-8 w-8 ml-2"
                  /> */}
                </>
                <button onClick={handleLogOut} className="btn btn-neutral ml-5">
                  LogOut
                </button>
              </>
            ) : (
              <Link to="/login" className="text-white text-lg font-bold mr-10">
                <button className="btn btn-accent">LogIn </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
