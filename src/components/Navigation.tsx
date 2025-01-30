import { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar
        className={`sticky top-0 z-10 w-full border-blue-950 bg-globalBg py-4 transition-all duration-300 ${isOpen ? "mb-4" : ""}`}
      >
        <div className="flex w-full items-center justify-between px-4">
          {/* Toggle Button (Now Controls State) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Navbar.Toggle />
          </button>

          {/* Brand Name (Now on the Right) */}
          <Navbar.Brand className="title-text block md:hidden">
            <Link
              to="/"
              className="text-4xl font-bold uppercase text-textColour"
            >
              Hanna
            </Link>
          </Navbar.Brand>
        </div>

        {/* Collapsible Menu (Now Pushes Content Down) */}
        <Navbar.Collapse
          className={`${isOpen ? "block" : "hidden"} w-full bg-globalBg md:flex md:w-auto md:justify-center`}
        >
          <Navbar.Link className="navbar-link block w-full px-4 py-2 text-center text-2xl uppercase text-textColour md:inline-block md:w-auto md:px-6 md:text-6xl">
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link className="navbar-link block w-full px-4 py-2 text-center text-2xl uppercase text-textColour md:inline-block md:w-auto md:px-6 md:text-6xl">
            <Link to="/about-me">About me</Link>
          </Navbar.Link>
          <Navbar.Link className="navbar-link block w-full px-4 py-2 text-center text-2xl uppercase text-textColour md:inline-block md:w-auto md:px-6 md:text-6xl">
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
          <Navbar.Link className="navbar-link block w-full px-4 py-2 text-center text-2xl uppercase text-textColour md:inline-block md:w-auto md:px-6 md:text-6xl">
            <Link to="/experience">Experience</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
