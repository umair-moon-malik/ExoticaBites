import React from "react";
import { Link } from "react-router-dom";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className="Header w-full h-[12vh] bg-primary text-textColor flex flex-row items-center justify-between fixed z-50">
      <div className="Logo text-3xl ml-8 font-black">
        <Link to={"/"}>Exotica Bites</Link>
      </div>
      <div className="NavLinks text-l font-bold mr-8">
        <ul className="list-none flex flex-row gap-8 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/order"}>Order</Link>
          {isSignedIn ? (
            <div className="flex items-center group p-2 border-[1.5px] rounded-full text-textColor bg-secondary transition  h-full">
              <UserButton showName="true" />
            </div>
          ) : (
            <div>
              <Link
                to="/sign-in"
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
                <span className="ml-1">Login / Signup</span>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
