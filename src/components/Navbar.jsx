import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const cartItems = useSelector(
    (state)=> state.cart.items
  )
  return (
    <div>
        <nav className="navbar navbar-expand bg-1 fg-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    {/* <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button> */}
    
      <div className="drawer-header">
      </div>
      <div className="drawer-body">
        <ul className="navbar-nav flex-row gap-3 mb-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to='/'>Home</Link> */}
            <NavLink className="nav-link" to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', color: isActive ? 'blue' : 'black',})}> Home </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/about'>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/contact'>Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/cart'>Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/product-list'>Product</Link>
          </li>
        </ul>
      </div>

      <h3 className="mb-0">Cart ({cartItems.length})</h3>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar