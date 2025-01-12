import { Navbar } from "flowbite-react";

export default function Navigation() {
  return (
    <Navbar className="bg-globalBg sticky top-0 z-10 flex h-20 justify-center border-blue-950 pb-16 pt-6">
      <Navbar.Collapse className="flex justify-center">
        <Navbar.Link className="navbar-link text-6xl text-navbarText" href="/">
          HOME
        </Navbar.Link>
        <Navbar.Link
          className="navbar-link text-6xl text-navbarText"
          href="/about-me"
        >
          ABOUT ME
        </Navbar.Link>
        <Navbar.Link
          className="navbar-link text-6xl text-navbarText"
          href="/projects"
        >
          PROJECTS
        </Navbar.Link>
        <Navbar.Link
          className="navbar-link text-6xl text-navbarText"
          href="/experience"
        >
          EXPERIENCE
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
