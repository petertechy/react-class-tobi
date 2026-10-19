
const bags = [
  {
    id: 1,
    name: "Leather Handbag",
    price: 25000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
  },
  {
    id: 2,
    name: "Fashion Handbag",
    price: 18000,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400",
  },
];

export default function Bag() {
  return (
    <div>
      <h2>Bags Collection</h2>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {bags.map((bag) => (
          <div key={bag.id}>
            <img src={bag.image} alt={bag.name} width="200" />
            <h3>{bag.name}</h3>
            <p>₦{bag.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}