import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222527;
    position: relative;
    top: 0;
    width: 100%;
    border-bottom: 2px solid white;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    &:hover,
    :focus,
    :active {
      color: yellow;
      text-decoration: none;
    }
  }

  .projects {
    color: white;
    background: #222527;
  }

  .dropdown-menu {
    background: #222527;
  }

  a {
    color: white !important;
  }

  a:hover {
    color: yellow !important;
  }
`;

class NavigationBar extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link>Nonstop Nythlon</Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-dark"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <IndexLinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </IndexLinkContainer>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <LinkContainer to="/googlebookssearch">
                  <NavDropdown.Item className="projects">
                    Google Books Search
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/poker">
                  <NavDropdown.Item className="projects">
                    Poker
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/marchmadness">
                  <NavDropdown.Item className="projects">
                    March Madness
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;