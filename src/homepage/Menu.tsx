import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import DarkModeMenu from '../components/dark-mode/DarkModeMenu';
import { LocalTheme } from '../components/dark-mode/ThemeProvider';

export default function Menu() {
  let location = useLocation();
  return (
    <LocalTheme theme='auto'>
      <Navbar expand='lg' bg='body' className='mb-4'>
        <Container>
          <Navbar.Brand as='h4'>
            <Link to='/' className='text-decoration-none'>
              React Academy
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              activeKey={location.pathname}
              variant='pills'
              className='me-auto'
            >
              <DarkModeMenu />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </LocalTheme>
  );
}
