import { Link } from "react-router";

function Home() {
  return (
    <div className="home">
      <h1 className="home_title">Shopping Cart</h1>
      <Link to="/shop" className="home_btn">
        Go to Shop
      </Link>
    </div>
  )
}

export default Home;