import './dev.scss';
import ReactStatusManager from './main';
import loadingImg from 'assets/loading.svg';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status:'init'
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

  render(){
    return (
      <div className="hello-react-refresher">
        <ReactStatusManager size="16px" status={this.state.status}>
          <span>下拉刷新</span>
          <span>释放更新</span>
          <img width="30" src={loadingImg} alt="" />
          <span>更新完毕</span>
        </ReactStatusManager>

        <button onClick={this.click1}>to `init`</button>
        <button onClick={this.click2}>to `active`</button>
        <button onClick={this.click3}>to `running`</button>
        <button onClick={this.click4}>to `finish`</button>
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
