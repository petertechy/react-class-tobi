
import { useSearchParams } from "react-router-dom";
import products from "../utils/Products"

export default function ItemsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter(
        (product) => product.category === category
      )
    : products;

  const handleFilter = (selectedCategory) => {
    if (selectedCategory === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: selectedCategory });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Our Products</h1>

      <nav
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <button onClick={() => handleFilter("all")}>
          All Products
        </button>

        <button onClick={() => handleFilter("bags")}>
          Bags
        </button>

        <button onClick={() => handleFilter("shoes")}>
          Shoes
        </button>
      </nav>

      <h2>
        {category
          ? category.charAt(0).toUpperCase() +
            category.slice(1)
          : "All Products"}
      </h2>

      <p>
        Showing {filteredProducts.length} products
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              borderRadius: 8,
            }}
          >
            <h3>{product.name}</h3>

            <p>Category: {product.category}</p>

            <p>
              Price: ₦{product.price.toLocaleString("en-NG")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
