import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/cn";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Robert" },
  { to: "/the-book", label: "The Book" },
  { to: "/excerpt", label: "Excerpt" },
  { to: "/news", label: "News & Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        `
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
        `,
        scrolled || !isHomePage
          ? "bg-[#f5f1e8] shadow-sm border-b border-gray-200"
          : "bg-transparent"
      )}
    >
      {/* MAIN NAVBAR */}
      <div
        className="
          w-full
          max-w-[1180px]
          mx-auto

          h-[74px]
          md:h-[82px]

          px-5
          md:px-8
          xl:px-0

          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="shrink-0"
        >
          <h1
            className={cn(
              `
                font-['Playfair_Display']
                font-semibold
                leading-none
                tracking-[-0.03em]
                transition-colors duration-300

                text-[18px]
                md:text-[20px]
              `,
              isHomePage
                ? scrolled
                  ? "text-[#1A3D3A]"
                  : "text-white"
                : "text-[#1A3D3A]"
            )}
          >
            Robert Tieken
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="
            hidden
            xl:flex

            items-center

            gap-[32px]
            2xl:gap-[42px]
          "
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  `
                    relative
                    text-[15px]
                    font-medium
                    tracking-[-0.01em]
                    transition-all duration-300
                    whitespace-nowrap
                  `,
                  isActive
                    ? "text-[#e7a11b]"
                    : scrolled || !isHomePage
                    ? "text-gray-600 hover:text-[#e7a11b]"
                    : "text-[#d6c6aa] hover:text-[#e7a11b]"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* TABLET + MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            `
              xl:hidden
              flex
              items-center
              justify-center

              transition-colors duration-300
            `,
            scrolled || !isHomePage
              ? "text-gray-700"
              : "text-white"
          )}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     {/* MOBILE + TABLET MENU */}
<div
  className={cn(
    `
      xl:hidden
      overflow-hidden
      backdrop-blur-xl
      border-t

      transition-all
      duration-500
      ease-in-out

      ${
        open
          ? "max-h-[500px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-4 border-transparent"
      }
    `,
    "bg-white border-gray-200"
  )}
>
  <div
    className="
      px-5
      md:px-8
      py-7

      flex
      flex-col
      gap-5
    "
  >
    {nav.map((item) => (
      <NavLink
        key={item.to}
        to={item.to}
        end={item.end}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          cn(
            `
              text-[15px]
              font-medium
              transition-colors duration-300
            `,
            isActive
              ? "text-[#e7a11b]"
              : "text-gray-600 hover:text-[#e7a11b]"
          )
        }
      >
        {item.label}
      </NavLink>
    ))}
  </div>
</div>
    </header>
  );
}