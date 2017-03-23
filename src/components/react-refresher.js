import './style.scss';
import classNames from 'classnames';
import {createElement,PureComponent,PropTypes} from 'react';
import loadingImg from './loading.svg';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    status:PropTypes.string,
    statusList:PropTypes.array
  };

  static defaultProps = {
    className:'',
    status:'init',
    statusList:['init','active','running','finish']
  };

  getDefaultChildren(){
    let children = [];
    return [
      createElement('span',{key:0},'下拉刷新'),
      createElement('span',{key:1},'释放更新'),
      createElement('img',{key:2,width:30,src:loadingImg}),
      createElement('span',{key:3},'加载完毕')
    ];
  }

  render(){
    let children = this.props.children || this.getDefaultChildren();
    const { className, status, statusList} = this.props;
    return (
      <div
      className={classNames('react-refresher',className)}
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
