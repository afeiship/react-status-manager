import { useState } from 'react';
import Rsm from '@jswork/react-status-manager/src';

const App = () => {
  const [s1, setS1] = useState('init');

  return (
    <div>
      <h3>Normal Case</h3>
      <nav>
        <button onClick={() => setS1('a')}>A</button>
        <button onClick={() => setS1('b')}>B</button>
        <button onClick={() => setS1('c')}>C</button>
      </nav>
      <Rsm items={['a', 'b', 'c']} value={s1}>
        <div>Status - A</div>
        <div>Status - B</div>
        <div>Status - C</div>
      </Rsm>
    </div>
  );
};
export default App;
