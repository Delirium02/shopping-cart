import { useState, useEffect } from "react";
import { useOutletContext } from 'react-router';


function Shop() {
	const { products, loading } = useOutletContext();

	return (
		<div>
			<h1 className="shop_title">Shop</h1>
			<div className="shop_products">
				{loading === true ? "Loading..." : products.map((item) => (
					<div key={item.id}>
						{item.title}
					</div>
				))}
			</div>
		</div>
	);
}

export default Shop;
