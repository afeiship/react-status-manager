# react-status-manager
> React component for status manager.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    statusList:PropTypes.array
  };

  static defaultProps = {
    statusList:[]
  };
  
```

## usage:
```jsx
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status:'init',
      smStatus:'N',
      step:0,
    };
  }

  click1 = (e)=>{
    this.setState({status:'init'});
    console.log('click1');
  }
  click2 = (e)=>{
    this.setState({status:'active'});
    console.log('click2');
  }
  click3 = (e)=>{
    this.setState({status:'running'});
    console.log('click3');
  }
  click4 = (e)=>{
    this.setState({status:'finish'});
    console.log('click4');
  }

  _click5 =(e)=>{
    this.setState({
      smStatus:'A'
    })
  };

  _clickStep = (e) =>{
    let step = this.state.step;
    this.setState({
      step: step ===3 ? 0: step+1
    })
  };

  render(){
    return (
      <div className="hello-react-refresher">
        <ReactStatusManager size="16px" status={this.state.status} statusList={['init','active','running','finish']}>
          <span>下拉刷新</span>
          <span>释放更新</span>
          <img width="30" src={loadingImg} alt="" />
          <span>更新完毕</span>
        </ReactStatusManager>


        <ReactStatusManager status={this.state.smStatus} className={`wp-icon-${this.state.smStatus}`} statusList={['N','A','F']}>
          <span>未开始</span>
          <span>进行中</span>
          <span>已经结束</span>
        </ReactStatusManager>

        <button onClick={this.click1}>to `init`</button>
        <button onClick={this.click2}>to `active`</button>
        <button onClick={this.click3}>to `running`</button>
        <button onClick={this.click4}>to `finish`</button>

        <button onClick={this._click5}>SetSMStatus</button>

          <h2>Wizard</h2>
          <button onClick={this._clickStep}>next step</button>
          <ReactStatusManager status={this.state.step} statusList={[0,1,2,3]}>
            <div className="step">step1,input password</div>
            <div className="step">step2,input phone</div>
            <div className="step">step3,input other info</div>
            <div className="step">step4,do submit! <button>SUBMIT</button></div>
          </ReactStatusManager>
      </div>
    );
  }
}

```



## resource:
+ http://ionicframework.com/docs/components/#full-buttons

