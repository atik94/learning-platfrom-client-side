import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGoogle, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { Button, Image } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user, providerLogin, logOut } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link Link to="/courses">
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user?.photoURL ? (
                  <>
                    <Button variant="light" onClick={handleLogOut}>
                      LogOut
                    </Button>
                    <Image style={{ height: "30px" }} roundedCircle src={user?.photoURL}></Image>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link>
                  <button onClick={handleGoogleSignIn} className="btn btn-info">
                    Sign In<FaGoogle></FaGoogle>
                  </button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="switch-container">
              <label className="switch">
                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                <span className="slider round" />
              </label>
              <label className="switch-label">{darkMode ? "Dark" : "Light"}</label>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
