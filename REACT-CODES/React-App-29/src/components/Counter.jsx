import { use, useState } from "react";


const Counter = () => {
const [count, setCount] = useState(0);

return (
    <>
    <div className="Counter-container">
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Update</button>
        <button onClick={() => setCount(count - 1)}>BackDate</button>
    </div>
    </>
)
}

export default Counter;