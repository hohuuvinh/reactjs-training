import React, { useState } from 'react';


function App(props) {
  const [count, setCount] = useState(0);
  const [ok, setOk] = useState('fsf');
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>ok {ok}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setOk('hghghg')}>
        ok
      </button>
    </div>
  );
}

export default App;