import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
export const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto text-center mt-20 h-[60vh]">
        <p className="text-3xl">404 Not Found</p>
        <NavLink
          to={"/"}
          className="mt-10 inline-block px-4 py-2 bg-indigo-600 border rounded-md text-white hover:bg-indigo-500 duration-300"
        >
          Go to home page
        </NavLink>
      </div>

      <Footer />
    </div>
  );
};
