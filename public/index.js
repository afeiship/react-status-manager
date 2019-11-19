import ReactStatusManager from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'init',
      smvalue: 'N',
      step: 0
    };
  }

  click1 = (e) => {
    this.setState({ value: 'init' });
    console.log('click1');
  };
  click2 = (e) => {
    this.setState({ value: 'active' });
    console.log('click2');
  };
  click3 = (e) => {
    this.setState({ value: 'running' });
    console.log('click3');
  };
  click4 = (e) => {
    this.setState({ value: 'finish' });
    console.log('click4');
  };

  _click5 = (e) => {
    this.setState({
      smvalue: 'A'
    });
  };

  _clickStep = (e) => {
    let step = this.state.step;
    this.setState({
      step: step === 3 ? 0 : step + 1
    });
  };

  render() {
    return (
      <div className="app-container">
        <ReactStatusManager
          size="16px"
          value={this.state.value}
          items={['init', 'active', 'running', 'finish']}>
          <span>下拉刷新</span>
          <span>释放更新</span>
          <img
            width="30"
            src={
              'https://assets-cdn.shimo.im/assets/images/loading-b67e5a67dc.gif'
            }
            alt=""
          />
          <span>更新完毕</span>
        </ReactStatusManager>

        <ReactStatusManager
          value={this.state.smvalue}
          className={`wp-icon-${this.state.smvalue}`}
          items={['N', 'A', 'F']}>
          <span>未开始</span>
          <span>进行中</span>
          <span>已经结束</span>
        </ReactStatusManager>

        <button onClick={this.click1}>to `init`</button>
        <button onClick={this.click2}>to `active`</button>
        <button onClick={this.click3}>to `running`</button>
        <button onClick={this.click4}>to `finish`</button>

        <button onClick={this._click5}>SetSMvalue</button>

        <h2>Wizard</h2>
        <button onClick={this._clickStep}>next step</button>
        <ReactStatusManager value={this.state.step} items={[0, 1, 2, 3]}>
          <div className="step">step1,input password</div>
          <div className="step">step2,input phone</div>
          <div className="step">step3,input other info</div>
          <div className="step">
            step4,do submit! <button>SUBMIT</button>
          </div>
        </ReactStatusManager>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));