
import { Outlet, NavLink } from "react-router-dom";

export default function ProductHome() {
  return (
    <div>
      <h1>Our Products</h1>

      <nav style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <NavLink to="/products/bags">Bags</NavLink>
        <NavLink to="/products/shoes">Shoes</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}