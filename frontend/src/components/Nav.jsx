import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <Navbar bg="dark">
        <Link to="/" style={{ textDecoration: 'none', paddingLeft: 15 }}>
            <h4>Home</h4>
        </Link>
    </Navbar>
  )
}
