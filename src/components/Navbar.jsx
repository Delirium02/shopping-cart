import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar_link">
        Home
      </Link>
      <Link to="/shop" className="navbar_link">
        Shop
      </Link>
      <Link to="/cart" className="navbar_link">
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;