import React from 'react';
import Counter from './components/Counter';
import Usuario from './components/Usuario';
import TimerFather from './components/TimerFather';

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
    </>
  );
}

export default App;
