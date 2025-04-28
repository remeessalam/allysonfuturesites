import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/images/logoDark.png";
import logolight from "../assets/images/logolight.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/contact-us");
  };

  const isActive = (path) => location.pathname === path;
  const routes = [
    { link: "/", name: "Home" },
    { link: "/about-us", name: "About Us" },
    // {
    //   link: "/services",
    //   name: "Services",
    // },
    {
      link: "/services",
      name: "Services",
      children: [
        {
          link: "/web-development",
          name: "Web Development",
        },
        {
          link: "/app-development",
          name: "App Development",
        },
        // {
        //   link: "/services",
        //   name: "Other Services",
        // },
      ],
    },
    { link: "Portfolio", name: "Portfolio" },
  ];
  return (
    <nav className="fixed w-full top-0 !z-50 bg-primary dark:bg-darkblack shadow-md max-w-screen ">
      <div className="wrapper">
        <div className="flex items-center justify-between py-5">
          <div className="flex-shrink-0">
            <div className=" w-auto text-white">
              <img
                src={isDarkMode ? logo : logolight}
                alt="logo"
                className="w-[11.5rem]"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {routes.map((path) =>
              path.name === "Services" ? (
                <div
                  key={path.link}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={`${path.link}`}
                    className={`text-white hover:text-blue-300 dark:hover:text-primary ${
                      isActive(path.link)
                        ? "text-blue-300 dark:text-primary"
                        : ""
                    }`}
                  >
                    {path.name}
                  </Link>

                  <div
                    className={`absolute top-full left-0 mt-5 bg-white text-black shadow-md rounded-md py-2 min-w-48 z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                      isServicesOpen
                        ? "max-h-56 opacity-100"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    {path.children.map((child) => (
                      <Link
                        key={child.link}
                        to={child.link}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={path.name}
                  to={path.link}
                  className={`text-white hover:text-blue-300 dark:hover:text-primary ${
                    isActive(path.link) ? "text-blue-300 dark:text-primary" : ""
                  }`}
                >
                  {path.name}
                </Link>
              )
            )}

            <button
              onClick={navigateTo}
              className="primary-btn !bg-white !text-darkbackground dark:!text-white dark:!bg-primary"
            >
              Contact Us
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden max-w-screen">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
            {routes.map((path) =>
              path.name === "Services" ? (
                <Link>
                  {" "}
                  <Link
                    key={path.name}
                    to={path.link}
                    onClick={toggleMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ${
                      isActive(path.link) ? "bg-gray-100 dark:bg-gray-800" : ""
                    }`}
                  >
                    {path.name}
                    <div>
                      {/* <Link>Web Development</Link> */}
                      {path.children.map((child) => (
                        <div className="text-white ml-4 py-2">
                          <Link to={child.link} className="text-sm">
                            {child.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Link>
                </Link>
              ) : (
                <Link
                  key={path.name}
                  to={path.link}
                  onClick={toggleMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive(path.link) ? "bg-gray-100 dark:bg-gray-800" : ""
                  }`}
                >
                  {path.name}
                </Link>
              )
            )}
            <button
              onClick={() => {
                navigateTo();
                toggleMenu();
              }}
              className="w-full text-center bg-primary  text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
