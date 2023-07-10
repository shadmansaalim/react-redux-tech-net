import type { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement,incrementByAmount } from './redux/features/counter/counterSlice'

function App() {
  const {count} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()


  return (
    <div>
    <div className="flex justify-center items-center">
      <button 
      className="bg-green-500 p-2 m-2"
      aria-label="Increment value"
      onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button 
      className="bg-green-500 p-2 m-2"
      aria-label="Increment value"
      onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <div>{count}</div>
      <button 
      className="bg-red-500 p-2 m-2"
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  </div>
  )
}

export default App
