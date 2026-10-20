import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 8500 },
    { id: 2, name: "USB-C Hub", price: 12000 },
    { id: 3, name: "Laptop Stand", price: 15500 },
  ];
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Products;
