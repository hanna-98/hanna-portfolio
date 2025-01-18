import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar className="sticky top-0 z-10 flex h-20 justify-center border-blue-950 bg-globalBg pb-16 pt-6">
      <Navbar.Collapse className="flex justify-center">
        <Navbar.Link className="navbar-link text-6xl text-textColour">
          <Link to="/">HOME</Link>
        </Navbar.Link>
        <Navbar.Link className="navbar-link text-6xl text-textColour">
          <Link to="/about-me">ABOUT ME</Link>
        </Navbar.Link>
        <Navbar.Link className="navbar-link text-6xl text-textColour">
          <Link to="/projects">PROJECTS</Link>
        </Navbar.Link>
        <Navbar.Link className="navbar-link text-6xl text-textColour">
          <Link to="/experience">EXPERIENCE</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
