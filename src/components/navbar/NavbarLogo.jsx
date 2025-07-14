import React from "react";
import { Link } from "react-scroll";

function NavbarLogo() {
  return (
    <div>
      <Link to="hero" className="cursor-pointer">
        <h1 className="text-2xl text-white sm:hidden md:block">
          Mokosa Isidore
        </h1>
        <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden ">
          MI
        </h1>
      </Link>
    </div>
  );
}

export default NavbarLogo;
