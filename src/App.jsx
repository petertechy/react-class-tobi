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
import './App.css';
import Contact from "./Contact";
import Counter from "./Counter";
import TodoApp from "./TodoApp";
const myStyle = {
  backgroundColor: "#fee2e2",
  color: "#991b1b"
};

const MyText = styled.p`
    line-height: 37px;
    font-size: 25px;
`

const App = () => {
  return (
    <>
      <button className="btn btn-success w-100 my-4">Press this</button>
      <button className="btn">Click me</button>
      <TodoApp/>
      <Card/>
      <Counter/>
      <Contact/>
      <h1 style={{color: "green", fontSize: "40px"}}>Hello Everybody {4 + 5}</h1>
      <MyText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod repellat maiores dolore sapiente accusantium reprehenderit praesentium quisquam laborum porro cum! Accusantium doloribus eum quas perspiciatis recusandae minima vel rem illum.</MyText>
      <button className="btn">Click us</button>
      <h2 style={myStyle}>Good Morning {myName}</h2>
      <img src={Image} alt="" />
    </>
  );
};

export default App;
