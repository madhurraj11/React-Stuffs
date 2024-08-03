import React, {useState, useEffect} from 'react';

const ReverseCount = () => {

    const [count, setCount] = useState(10);

    useEffect(() => {
        // Define a function to handle the countdown
        const decrement = () => {
            if (count > 1) {
                setCount(prevCount => prevCount - 1);
            }
        };

        // Set an interval to call the decrement function every second
        const intervalId = setInterval(decrement, 1000);

        // Clean up the interval when the component is unmounted or the count changes
        return () => clearInterval(intervalId);
    }, [count]); // Depend on the count state to handle automatic decrement

    return(
        <div>
            <h1>Reverse Count</h1>
            <div>
                <h1>{count}</h1>
            </div>
        </div>
    );
}

export default ReverseCount;