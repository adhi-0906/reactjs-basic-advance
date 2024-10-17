import React from 'react'

function UseState() {
    const [count, setCount] = useState(0); // Fixed the typo here

    // Using arrow function is available in ES6
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
  return (
    <div>
                    <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
            {/* simple function */}
            {/* <button onClick={() => setCount(count + 1)}>+</button> */}

    </div>
  )
}

export default UseState