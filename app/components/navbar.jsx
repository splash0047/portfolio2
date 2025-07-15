// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Pinak Chimurkar
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/blog", label: "BLOGS" },
            { href: "/#projects", label: "PROJECTS" },
          ].map((item) =>
            item.href ? (
              <li key={item.label}>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={item.href}>
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{item.label}</div>
                </Link>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;