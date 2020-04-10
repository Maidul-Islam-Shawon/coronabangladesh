import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg" variant="dark" className="navStyle" sticky="top">
      <Link href="/" passHref>
        <Navbar.Brand className="logo">Corona Bangladesh</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item className="navPadding">
            <Link href="/" passHref>
              <Nav.Link style={{ color: "white" }}>
                <span className="navBorder">|</span> Home
              </Nav.Link>
            </Link>
          </Nav.Item>

          <Nav.Item className="navPadding">
            <Link href="/advice" passHref>
              <Nav.Link style={{ color: "white" }}>
                <span className="navBorder">|</span> Advice
              </Nav.Link>
            </Link>
          </Nav.Item>

          <Nav.Item className="navPadding">
            <Link href="/about" passHref>
              <Nav.Link style={{ color: "white" }}>
                <span className="navBorder">|</span> About
              </Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
