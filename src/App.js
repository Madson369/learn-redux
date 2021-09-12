import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment} from './actions/increment.js';
import {decrement} from './actions/decrement.js'
import {login} from './actions/login.js'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
 
 
 
 
 
  return (
   <div>
     <h1>Counter {counter} </h1>
     <button onClick={() => dispatch(increment(1))}>+</button>
     <button onClick={() => dispatch(decrement())}>-</button>
     <button onClick={() => dispatch(login())}>LOGAR</button>


     {isLogged? <h3>Ronaldo bragantino</h3> : ''}


   </div>
  );
}

export default App;
