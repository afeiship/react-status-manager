# react-status-manager
> React component for status manager.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-status-manager
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| items     | array  | false    | []      | The status list.                      |
| value     | any    | false    | -       | Current status value.                 |
| nodeName  | any    | false    | 'div'   | The node name.                        |
| virtual   | bool   | false    | false   | If use React.Fragment element.        |


## usage
1. import css
  ```scss
  @import "~@jswork/react-status-manager/dist/style.css";

  // or use sass
  @import "~@jswork/react-status-manager/dist/style.scss";

  // customize your styles:
  $react-status-manager-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactStatusManager from '@jswork/react-status-manager';
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
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-status-manager">
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

          <button
            className="button is-primary is-fullwidth mb-2"
            onClick={this.click1}>
            to `init`
          </button>
          <button
            className="button is-primary is-fullwidth mb-2"
            onClick={this.click2}>
            to `active`
          </button>
          <button
            className="button is-primary is-fullwidth mb-2"
            onClick={this.click3}>
            to `running`
          </button>
          <button
            className="button is-primary is-fullwidth mb-2"
            onClick={this.click4}>
            to `finish`
          </button>
          <button
            className="button is-primary is-fullwidth mb-2"
            onClick={this._click5}>
            SetSMvalue
          </button>

          <h2>Wizard</h2>
          <button
            className="button is-primary is-fullwidth mb-2"
            onClick={this._clickStep}>
            next step
          </button>
          <ReactStatusManager value={this.state.step} items={[0, 1, 2, 3]}>
            <div className="step">step1,input password</div>
            <div className="step">step2,input phone</div>
            <div className="step">step3,input other info</div>
            <div className="step">
              step4,do submit! <button>SUBMIT</button>
            </div>
          </ReactStatusManager>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-status-manager/


## license
Code released under [the MIT license](https://github.com/afeiship/react-status-manager/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-status-manager
[version-url]: https://npmjs.org/package/@jswork/react-status-manager

[license-image]: https://img.shields.io/npm/l/@jswork/react-status-manager
[license-url]: https://github.com/afeiship/react-status-manager/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-status-manager
[size-url]: https://github.com/afeiship/react-status-manager/blob/master/dist/react-status-manager.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-status-manager
[download-url]: https://www.npmjs.com/package/@jswork/react-status-manager
