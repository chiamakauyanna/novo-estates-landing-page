import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavBar from "../components/common/NavBar";
import Button from "../components/common/Button";
import { navLinks } from "../data";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-secondary z-10">
      {/* Main Header */}
      <div className="flex justify-between items-center py-4 px-6 lg:px-20">
        <div className="flex gap-15 items-center">
          {/* Logo */}
          <div className="font-bold text-2xl">
            <h2>Novo Estates</h2>
          </div>

          {/* Desktop NavBar */}
          <div className="hidden lg:block">
            <NavBar />
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex gap-2">
          <a href="#sign-in">
            <Button
              text="Sign in"
              className="text-accent bg-secondary hover:text-primary"
            />
          </a>

          <a href="#sign-up">
            <Button text="Sign up" className="text-primary bg-accent" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden hover:text-accent text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-secondary px-6 py-6 flex flex-col gap-6 absolute right-0">
          <ul className="flex flex-col gap-4 font-heading">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden flex gap-2">
            <a href="#sign-in">
              <Button
                text="Sign in"
                className="text-accent bg-primary border"
              />
            </a>

            <a href="#sign-up">
              <Button text="Sign up" className="text-primary bg-accent" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
