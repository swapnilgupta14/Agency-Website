import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Menu from "@/components/common/Menu";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/whoarewe",
    },
    {
      label: "Projects",
      link: "/Projects",
    },
    // {
    //   label: "Services",
    //   link: "#",
    // },
    {
      label: "Contact",
      link: "/connect",
    },
  ];

  return (
    <header className="w-full">
      <div className="flex items-center justify-between pt-4 px-14">
        <div className="text-2xl font-bold text-teal-800">
          <Link href="/" className="text-fontColor">
            French Fry
          </Link>
        </div>
        <nav className="hidden md:visible lg:visible md:flex lg:flex text-sm bg-white rounded-full py-1 m-2 border-1 border-accent aria-hidden:true z-20">
          {navLinks.map((item) => {
            const isActive =
              item.link === "/"
                ? pathname === item.link
                : pathname.startsWith(item.link) ||
                  (item.label === "Projects" && pathname.includes("projects"));

            return (
              <Link
                id={item.label}
                key={item.label}
                href={item.link}
                className={`mx-1 px-4 py-2 font-bold rounded-full transition-all duration-300 ease-in-out transform aria-hidden:true ${
                  isActive
                    ? "bg-accent text-white"
                    : "text-accent hover:bg-gray-300 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle Menu"
          className="flex p-2"
          onClick={toggleMenu}
        >
          <img
            src="/MenuIcon.svg"
            alt="Menu"
            className="w-full rounded-lg items-center justify-center"
          />
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50">
            <Menu toggleMenu={toggleMenu} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
