import './style.scss';
import classNames from 'classnames';
import {createElement,PureComponent,PropTypes} from 'react';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    status:PropTypes.string,
    size:PropTypes.string,
    statusList:PropTypes.array
  };

  static defaultProps = {
    status:'init',
    size:'14px',
    statusList:['init']
  };

  render(){
    const { className, status, statusList, size ,children} = this.props;
    return (
      <div
      className={classNames('react-status-manager',className)}
      style={{fontSize:size}}
      data-status={status}
      >
        {
          children.map((child,index)=>{
            return status === statusList[index] && child;
          })
        }
      </div>
    );
  }
}
