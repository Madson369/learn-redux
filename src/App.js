import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/increment.js";
import { decrement } from "./actions/decrement.js";
import { login } from "./actions/login.js";
import { adicionar } from "./actions/adicionar.js";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const carrinho = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const ronaldo = {
    nome: "ronaldo",
    tamanho: "grande",
  };

  return (
    <div>
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(login())}>LOGAR</button>
      <h1>bagulho {carrinho.map((p) => {
            return (
              <h2> {p.nome} | {p.tamanho} </h2>
            );
          })} </h1>
      <button onClick={() => dispatch(adicionar(ronaldo))}>NAOSEI</button>

      {isLogged ? <h3>Ronaldo bragantino</h3> : ""}
    </div>
  );
}

export default App;
