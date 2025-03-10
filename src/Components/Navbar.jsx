import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="navbar bg-base-100 px-8 fixed shadow-lg z-10">
      <div className="flex-1">
        <a className="btn btn-ghost gap-0 text-2xl">
          <span className="text-secondary">Byte</span>
          <span className="text-primary">Blaze</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold ">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>Bookmarks</a>
          </li>
        </ul>
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            onChange={handleToggle}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />

          { theme === "light" ?
            <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg> : 
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          }
        </label>
      </div>
    </div>
  );
};

export default Navbar;
