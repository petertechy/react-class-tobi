//JSX - this is a function that returns javascript + html then exports by default
//React Fragment
//rafce, rfce

// function App() {
//   return (
//     <>
//       <h1>Hello Everybody</h1>
//       <h2>Good Morning</h2>
//     </>
//   );
// }

//Interpolation
const myName = "John";
console.log(myName);
import styled from "styled-components";
import Image from "./assets/hero.png";
import Card from "./Card";
import "./App.css";
import Contact from "./Contact";
import Counter from "./Counter";
import TodoApp from "./TodoApp";
import ProductCard from "./ProductCard";
import ProductCard1 from "./ProductCard1";
import TemperatureConverter from "./TemperatureConverter";
import RatingApp from "./RatingApp";
import { useState } from "react";
const myStyle = {
  backgroundColor: "#fee2e2",
  color: "#991b1b",
};

const MyText = styled.p`
  line-height: 37px;
  font-size: 25px;
`;

const App = () => {
  const [likes, setLikes] = useState([0, 0]);

  const handleLike = (index) => {
    setLikes((previousLikes) =>
      previousLikes.map((likeCount, currentIndex) =>
        currentIndex === index ? likeCount + 1 : likeCount,
      ),
    );
  };

  return (
    <>
      <button className="btn btn-success w-100 my-4">Press this</button>
      <button className="btn">Click me</button>

      <ProductCard
        title="Josh"
        age="20"
        style="text-success fw-bold"
        likes={likes[0]}
        onLike={() => handleLike(0)}
      />
      <ProductCard
        title="Paul"
        age="15"
        style="text-decoration-underline text-danger"
        likes={likes[1]}
        onLike={() => handleLike(1)}
      />
      {/* <ProductCard /> */}

      <ProductCard1>
        <h3>Wireless Mouse</h3>
        <p>₦8,500</p>
      </ProductCard1>

      <TemperatureConverter />
      <RatingApp />
      <TodoApp />
      <Card />
      <Counter />
      <Contact />
      <h1 style={{ color: "green", fontSize: "40px" }}>
        Hello Everybody {4 + 5}
      </h1>
      <MyText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod repellat
        maiores dolore sapiente accusantium reprehenderit praesentium quisquam
        laborum porro cum! Accusantium doloribus eum quas perspiciatis
        recusandae minima vel rem illum.
      </MyText>
      <button className="btn">Click us</button>
      <h2 style={myStyle}>Good Morning {myName}</h2>
      <img src={Image} alt="" />
    </>
  );
};

export default App;
