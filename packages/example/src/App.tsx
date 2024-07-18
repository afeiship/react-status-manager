import Rsm from '@jswork/react-status-manager/src';
import { useState } from 'react';

function App() {
  const [v1, setV1] = useState('init');
  const [v2, setV2] = useState('init');
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <div className="y-5 border border-dashed border-gray-300 rounded-md p-5 bg-gray-50 mb-5">
        <h1>react-status-manager</h1>
        <nav className="x-2 mb-2">
          <button className="btn btn-sm btn-primary" onClick={() => setV1('loading')}>Set Loading</button>
          <button className="btn btn-sm btn-success" onClick={() => setV1('done')}>Set Done</button>
          <button className="btn btn-sm btn-danger" onClick={() => setV1('error')}>Set Error</button>
          <span>Current Status: {v1}</span>
        </nav>
        <Rsm items={['init', 'loading', 'done', 'error']} value={v1}>
          <div className="debug-red">INIT</div>
          <div className="debug-blue">LOADING...</div>
          <div className="debug-green">DONE</div>
          <div className="bg-red-500 text-white debug-red">ERROR</div>
        </Rsm>
      </div>
      <div className="y-5 border border-dashed border-gray-300 rounded-md p-5 bg-gray-50">
        <h1>react-status-manager - Nested status</h1>
        <nav className="x-2 mb-2">
          <button className="btn btn-sm btn-primary" onClick={() => setV2('init')}>Set Init</button>
          <button className="btn btn-sm btn-primary" onClick={() => setV2('loading')}>Set Loading</button>
          <button className="btn btn-sm btn-success" onClick={() => setV2('done')}>Set Done</button>
          <button className="btn btn-sm btn-danger" onClick={() => setV2('error')}>Set Error</button>
          <span>Current Status: {v2}</span>
        </nav>
        <Rsm items={['init', ['loading', 'done'], 'error']} value={v2}>
          <div className="debug-red">INIT</div>
          <div className="bg-green-200 debug-red">LOading + DONE</div>
          <div className="bg-red-500 text-white debug-red">ERROR</div>
        </Rsm>
      </div>
    </div>
  );
}

export default App;
