import Image from "next/image";
import Link from "next/link";
import LogoIcon from "../../public/icons/logo.png";
import MenuIcon from "../../public/icons/menu.svg";
import CloseIcon from "../../public/icons/close.svg";
import { useState, useEffect } from "react";

function Header() {
  const [menu, setMenu] = useState("MenuIcon");
  const handleClick = () =>
    menu == "MenuIcon" ? setMenu("CloseIcon") : setMenu("MenuIcon");
  useEffect(() => {}, [menu]);

  return (
    <nav className="px-5 py-5 lg:py-0 bg-zinc-50 shadow lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl cursor-pointer">
          <Image src={LogoIcon} alt="Logo" className="h-6 inline" />
        </span>
        <span className="text-3xl cursor-pointer lg:hidden block">
          <Image
            onClick={handleClick}
            src={menu == "MenuIcon" ? MenuIcon : CloseIcon}
            alt="Logo"
            className="h-6"
            width={50}
            height={50}
          ></Image>
        </span>
      </div>

      <ul
        className={
          menu == "MenuIcon"
            ? "lg:flex lg:items-center w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 z[-1] lg:z-auto lg:static absolute top-[-400px] transition-all ease-in duration-500"
            : "lg:flex lg:items-center w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 lg:opacity-100 z[-1] lg:z-auto lg:static top-[-400px] transition-all ease-in duration-500"
        }
      >
        <li className="m-4">
          <Link href="/">
            <a className="text-xl hover:text-cyan-500 duration-500">Home</a>
          </Link>
        </li>
        <li className="m-4">
          <Link href="/">
            <a className="text-xl hover:text-cyan-500 duration-500">Services</a>
          </Link>
        </li>
        <li className="m-4">
          <Link href="/">
            <a className="text-xl hover:text-cyan-500 duration-500">Projects</a>
          </Link>
        </li>
        <li className="m-4">
          <Link href="/">
            <a className="text-xl hover:text-cyan-500 duration-500">
              For Professionals
            </a>
          </Link>
        </li>
      </ul>
      <div>
        <Link href="/">
          <a
            className={
              menu == "MenuIcon"
                ? "text-xl hover:text-cyan-500 duration-500 lg:opacity-100 opacity-0 lg:static absolute"
                : "text-xl hover:text-cyan-500 duration-500 lg:opacity-100 lg:static m-4"
            }
          >
            Sign In
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
