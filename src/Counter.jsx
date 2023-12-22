import React, { useState } from 'react';

function Counter() { 

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (<div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement }>빼기</button>
        <button className='counter-button' onClick={reset }>초기화</button>
        <button className='counter-button' onClick={increment }>더하기</button>

    </div>)
}

export default Counter