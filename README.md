# react-status-manager
> React component for status manager.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.any,
    nodeName: PropTypes.any
  };

  static defaultProps = {
    items: [],
    nodeName: nodeName()
  };
  
```

## usage:
```jsx
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:'init',
      smvalue:'N',
      step:0,
    };
  }

  click1 = (e)=>{
    this.setState({value:'init'});
    console.log('click1');
  }
  click2 = (e)=>{
    this.setState({value:'active'});
    console.log('click2');
  }
  click3 = (e)=>{
    this.setState({value:'running'});
    console.log('click3');
  }
  click4 = (e)=>{
    this.setState({value:'finish'});
    console.log('click4');
  }

  _click5 =(e)=>{
    this.setState({
      smvalue:'A'
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
        <ReactvalueManager size="16px" value={this.state.value} items={['init','active','running','finish']}>
          <span>下拉刷新</span>
          <span>释放更新</span>
          <img width="30" src={loadingImg} alt="" />
          <span>更新完毕</span>
        </ReactvalueManager>


        <ReactvalueManager value={this.state.smvalue} className={`wp-icon-${this.state.smvalue}`} items={['N','A','F']}>
          <span>未开始</span>
          <span>进行中</span>
          <span>已经结束</span>
        </ReactvalueManager>

        <button onClick={this.click1}>to `init`</button>
        <button onClick={this.click2}>to `active`</button>
        <button onClick={this.click3}>to `running`</button>
        <button onClick={this.click4}>to `finish`</button>

        <button onClick={this._click5}>SetSMvalue</button>

          <h2>Wizard</h2>
          <button onClick={this._clickStep}>next step</button>
          <ReactvalueManager value={this.state.step} items={[0,1,2,3]}>
            <div className="step">step1,input password</div>
            <div className="step">step2,input phone</div>
            <div className="step">step3,input other info</div>
            <div className="step">step4,do submit! <button>SUBMIT</button></div>
          </ReactvalueManager>
      </div>
    );
  }
}

```

## in react-native
```jsx
<ReactStatusManager nodeName={View} status={'A'} statusList={['N','A']}>
  <Text>TEXT-N</Text>
  <Text>TEXT-A</Text>
</ReactStatusManager>
```

## todos:
- [ ] status/statusList -> value/items

## resource:
+ http://ionicframework.com/docs/components/#full-buttons

