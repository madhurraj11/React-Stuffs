import React, {useState} from 'react';

const useCounter = (initialValues = 0) => {
    const [count , setCount] = useState(initialValues);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        if(count > -10 ){
            setCount(count-1);
        }
    }

    const reset = () => {
        setCount(0);
    }

    return { count, increment, decrement, reset};
};

export default useCounter;