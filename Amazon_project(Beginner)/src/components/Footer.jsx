import React from "react";
import { Amazon } from "../assets/images";
import { footerLinks, navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-slate-800 px-6 py-6">
      {/*upper half*/}
      <div>
        {/*Logo Div*/}
        <div className="flex mb-2 item-center justify-center">
          <img src={Amazon} alt="Logo" width={100} height={100} />
        </div>
        {/*Navlinks Div*/}
        <div>
          <ul className="flex flex-1 font-bold gap-6 mb-2 items-end justify-center">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-white leading-normal">
                  {" "}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*Contact Details Div*/}
        <div></div>
      </div>
      {/*Lower half*/}
      <div className="flex  items-center justify-center">
        <p className="font-semibold  mt-2 text-xs text-white">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
