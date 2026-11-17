import { useRef, useEffect } from "react";

function SearchBox() {
  const inputRef = useRef(null); // starts as null
  useEffect(() => {
    inputRef.current.focus(); // runs after the first render
  }, []);
  return <input ref={inputRef} placeholder="Search..." />;
}

export default SearchBox;
