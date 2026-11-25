import { useState, useEffect } from "react";

function Shop() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			fetch("https://fakestoreapi.com/products")
				.then((response) => response.json())
				.then((data) => {
					setProducts(data);
					console.log(data);
				});
		}
		fetchProducts();
	}, []);

	return (
		<div>
			<h1>Shop</h1>
			<div>
				{products.map((item) => (
					<div key={item.id}>{item.title}</div>
				))}
			</div>
		</div>
	);
}

export default Shop;
