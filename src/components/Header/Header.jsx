import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-transparent absolute w-full p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-lg font-bold">PATHSEEKWAVE</h1>
          <div>
            <Link to="/" className="text-white text-lg font-bold mr-10">
              Home
            </Link>
            <Link to="#" className="text-white text-lg font-bold mr-10">
              News
            </Link>
            <Link to="#" className="text-white text-lg font-bold mr-10">
              Destination
            </Link>
            <Link to="#" className="text-white text-lg font-bold mr-10">
              Blog
            </Link>
            <Link to="#" className="text-white text-lg font-bold mr-10">
              Contact
            </Link>
            <Link to="/login" className="text-white text-lg font-bold mr-10">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
