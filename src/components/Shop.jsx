import { useState, useEffect } from "react";
import { useOutletContext } from 'react-router';


function Shop() {
	const { products, loading } = useOutletContext();

	return (
		<div>
			<h1 className="shop_title">Shop</h1>
			<div className="shop_products">
				{loading === true ? "Loading..." : products.map((item) => (
					<div className="shop_card" key={item.id}>
						<h4 className="shop_item-title">{item.title}</h4>
						<div className="shop_options">
							<div>
								<button className="shop_button">-</button>
								<input className="shop_input" type="number" />
								<button className="shop_button">+</button>
							</div>
							<p className="shop_item-price">${item.price.toFixed(2)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Shop;
