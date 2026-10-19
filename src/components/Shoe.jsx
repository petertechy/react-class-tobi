
const shoes = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: 30000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
  {
    id: 2,
    name: "Casual Shoes",
    price: 35000,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
  },
];

export default function Shoe() {
  return (
    <div>
      <h2>Shoes Collection</h2>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} width="200" />
            <h3>{shoe.name}</h3>
            <p>₦{shoe.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}