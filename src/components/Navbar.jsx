import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/shop" className="nav-link">
        Shop
      </Link>
    </nav>
  );
}

export default Navbar;