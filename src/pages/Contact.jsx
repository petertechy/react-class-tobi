import { useSelector } from "react-redux"
import styles from "./Contact.module.css"

const Contact = () => {
  const cartItems = useSelector(
    (state)=> state.cart.items
  )
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>Contact Us</h1>

        <h3>Cart ({cartItems.length})</h3>
    </div>
  )
}

export default Contact