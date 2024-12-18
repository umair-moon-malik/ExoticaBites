import React from "react";
import { useAuth } from "../utils/AuthContext.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const displayName = isAuthenticated ? currentUser : <div>Login / Signup</div>;

  return (
    <div className="Header w-full h-[12vh]  backdrop-blur-lg text-textColor flex flex-row items-center justify-between fixed z-50">
      <div className="Logo text-3xl ml-8 font-black">
        <Link to={"/"}>Exotica Bites</Link>
      </div>
      <div className="NavLinks text-l font-bold mr-8">
        <ul className="list-none flex flex-row gap-8 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/order"}>Order</Link>

          <Link
            to="/login"
            className="group p-3 border-[1.5px] rounded-full text-textColor bg-secondary hover:bg-textColor hover:text-primary flex items-center transition w-full h-full"
            id="header-links"
          >
            <svg
              className="text-textColor group-hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="M490-480 301-669l83-83 272 272-272 272-83-83 189-189Z" />
            </svg>
            <span className="ml-1">{displayName}</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
