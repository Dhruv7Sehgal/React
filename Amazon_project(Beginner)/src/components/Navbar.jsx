import React from "react";
import { Amazon } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex bg-slate-800 items-start justify-center px-6 py-6">
      <nav className="mt-1">
        <Link to="/">
          <img src={Amazon} alt="logo" width={100} height={100} />
        </Link>
      </nav>
      <ul className="flex flex-1 font-bold gap-6 items-end justify-center">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-white leading-normal">
              {" "}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
