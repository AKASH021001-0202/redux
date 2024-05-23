import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const countReducer = useSelector((state)=>state.countReducer)
    const dispatch = useDispatch();  
  return (
    <div className='mt-auto'>
        <h1>counter : {countReducer.count}</h1>
       
        <button className='btn btn-primary' onClick={()=>dispatch( { type : 'inc'})}>increament</button>
        <button className='btn btn-secondary'onClick={()=>dispatch( { type : 'dec'})}>Decreament</button>
        <button className='btn btn-danger' onClick={()=>dispatch( { type : 'reset'})}>reset</button>
    </div>
  )
}

export default Counter;