import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByMount, incrementAsync, selectCount } from './counterSlice';

export  function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('1');

    return (
        <div>
            <div>
                <button aria-label="Increment value"
                        onClick={() => dispatch(increment())}>
                        + 
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}>
                        -
                </button>
            </div>

            <div>
                <input  aria-label="Set increment amount"
                        value={incrementAmount}
                        onChange={e => setIncrementAmount(e.target.value)}/>
                <button onClick={() =>
                        dispatch(incrementByMount(Number(incrementAmount) || 0))}>
                        Add Amount
                </button>

                <button onClick={() =>
                        dispatch(incrementAsync(Number(incrementAmount) || 0))}>
                        Add Async
                </button>
            </div>
        </div>
    )
}