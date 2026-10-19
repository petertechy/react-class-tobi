import { useState } from "react";

const Counter = () => {
  const [age, setage] = useState(16);
  const [name, setname] = useState("Emmanuel");
  // const [isMarried, setisMarried] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const productList = [
    {
        id: 1,
      title: "Bread",
      price: 500,
      quantity: 20,
    },
    {
        id: 2,
      title: "Sweet",
      price: 100,
      quantity: 30,
    },
    {
        id: 3,
      title: "Biscuit",
      price: 1000,
      quantity: 25,
    },
  ];
  // let age = 34
  const handleChange = () => {
    // myAge = age + 1
    // age++
    setage(age + 1);
    setname("Mike");
    console.log(age);
    console.log(name);
  };
  return (
    <div className="text-center my-5">
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        )}
      </div>
      <h1>My name is {name}</h1>
      <h1>This is my Age - {age}</h1>
      <h4>{age >= 18 ? "Adult" : "Minor"}</h4>
      <button onClick={handleChange} className="btn btn-success">
        Change Age
      </button>

         <div className="card" style={{width: "16rem"}}>
       { productList.map((product)=>(
        <div className="card-body border d-flex" key={product.id}>
          <h5 className="card-title">{product.title}</h5>.
          <p className="card-text">{product.price}</p>.
          <p className="card-text">{product.quantity}</p>
        </div>
       ))}
      </div>


    </div>
  );
};

export default Counter;
