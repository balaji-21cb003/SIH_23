import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 bg-white">
      <Link href={"/"}>
        <img src="/logo.jpg" alt="Logo" className="w-35 h-16 ml-10" />
      </Link>
      <ul className="flex space-x-8">
        <li className="text-black"></li>
        <li className="text-black flex items-center">
          <AiFillHome className="ml-1" />
          <a href="/">Home</a>
        </li>
        <li className="text-black">
          <a href="#dept">Departments</a>
        </li>
      </ul>
    </div>
  );
}
