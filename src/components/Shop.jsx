import { useEffect } from "react";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => console.log(data))
  })

  return (
    <div>
      <h1>Shop</h1>
    </div>
  )
}

export default Shop;