import { navLinks } from "../../data";

const NavBar = () => {
  return (
    <div>
      <ul className="flex items-center gap-6 font-heading text-xs md:text-sm lg:text-base font-semibold uppercase">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="text-dark hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
