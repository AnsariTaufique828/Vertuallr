import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// npm install -g vite

// npx vite --host 0.0.0.0

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky.top-0.z-50.py-3.backdrop-blur-lg.border-b.border-neutral-700/80">
      <div className="container px-4.mx-auto.relative text-sm">
        <div className="felx justify-between items-center">
          <div className="flex items-center flex-shrink-0 justify-around py-4">
            <div className="flex items-center">
              <img
                className="h-41 w-10 mr-2 ml-30 d-flex"
                src={logo}
                alt="logo"
              />
              <span className="text-xl tracking-tight">Vertuallr</span>
            </div>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item,index) => (
                <li  key={index}>
                  <a className="hover:text-orange-600" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href=""
                className="py-2 px-3 border rounded-md hover:bg-orange-900 0 rounded-lg transition duration-200-"
              >
                {" "}
                Sign in
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md 
                 "
              >
                {" "}
                Creat an account
              </a>
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((item, index) => (
              <li className=" py-2" key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="display flex gap-4">
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border-2 rounded-md">
                Sign in
              </a>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md ">
              Create an account
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;