import React from "react";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 bg-white">
      <img src="/logo.jpg" alt="Logo" className="w-35 h-16 ml-10" />
      <ul className="flex space-x-8">
        <li className="text-black">
          <a href="#about">About</a>
        </li>
        <li className="text-black flex items-center"><AiFillHome className="ml-1" />
          <a href="#home">
            Home 
          </a>
        </li>
        <li className="text-black">
          <a href="#department">Departments</a>
        </li>
      </ul>
    </div>
  );
}