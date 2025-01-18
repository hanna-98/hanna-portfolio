import { Navbar } from "flowbite-react";

export default function Navigation() {
  return (
    <Navbar className="sticky top-0 z-10 flex h-20 justify-center border-blue-950 bg-globalBg pb-16 pt-6">
      <Navbar.Collapse className="flex justify-center">
        <Navbar.Link className="navbar-link text-6xl text-textColour" to="/">
          HOME
        </Navbar.Link>
        <Navbar.Link
          className="navbar-link text-6xl text-textColour"
          to="/about-me"
        >
          ABOUT ME
        </Navbar.Link>
        <Navbar.Link
          className="navbar-link text-6xl text-textColour"
          to="/projects"
        >
          PROJECTS
        </Navbar.Link>
        <Navbar.Link
          className="navbar-link text-6xl text-textColour"
          to="/experience"
        >
          EXPERIENCE
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
