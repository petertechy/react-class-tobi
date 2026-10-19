// import './card.css';
import Style from "./Card.module.css"

const Card = () => {
  return (
    <div className={Style.container}>
        <h1 className={`${Style.text} text-decoration-underline fs-2`}>Card is here</h1>
    </div>
  )
}

export default Card