import React, { useRef, useState } from "react";
// import SearchBox from "./SearchBox";

// const CounterDemo = () => {
//   const [stateCount, setStateCount] = useState(0);
//   const refCount = useRef(0);
//   return (
//     <div>
//       <SearchBox/>
//       <p>State count: {stateCount}</p>
//       <p>Ref count: {refCount.current}</p>
//       <button onClick={() => setStateCount(stateCount + 1)}>
//         Add to state
//       </button>
//       <button
//         onClick={() => {
//           refCount.current += 1;
//           console.log("ref is now", refCount.current);
//         }}
//       >
//         Add to ref
//       </button>
//     </div>
//   );
// };

// export default CounterDemo;

function CounterDemo() {
  const emailRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value.trim()) {
      emailRef.current.focus(); // send the cursor back to the empty field
      return;
    }
    console.log("Submitting", emailRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Log in</button>
    </form>
  );
}

export default CounterDemo;


