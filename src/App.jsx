import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";

function App() {
  // State for the shopping cart
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		setCart((prevCart) => [...prevCart, item]);
	};

	const removeFromCart = (itemId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
	};

	const updateQuantity = (itemId, quantity) => {
		setCart((prevCart) =>
			prevCart.map((item) => (
				item.id === itemId ? { ...item, quantity } : item
			))
    );
	};

  // Fetch products from the API
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchProducts() {
			setLoading(true);
			try {
				const response = await fetch(
					"https://fakestoreapi.com/products",
				);
				if (!response.ok) throw new Error(response.status);
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error("Failed to load products:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchProducts();
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Outlet context={{ products, loading }} />
		</div>
	);
}

export default App;
