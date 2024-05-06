import React from 'react';
import Counter from './components/Counter';
import Usuario from './components/Usuario';
import TimerFather from './components/TimerFather';
import CounterRedu from './components/CounterRedu';
import Formulario from './components/Formulario';
import FormularioSS from './components/FormularioSeconds';

function App() {
  return (
    <>
    <h1>React + Typescript</h1>
    <hr/>

    <h2>useState</h2>
    <Counter />

    <Usuario />

    <h2>useEffect - useRef</h2>
    <hr/>
    <TimerFather />

    <h2>useReducer</h2>
    <hr/>
    <CounterRedu/>

    <h2>customHooks</h2>
    <hr/>
    <Formulario />
    <br/>
    <FormularioSS/>
    </>
  );
}

export default App;
