import {PureComponent, createElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string,
    statusList:PropTypes.array
  };

  static defaultProps = {
    statusList:[]
  };

  render(){
    const { className, status, statusList, size ,children,...props} = this.props;
    return (
      <div
      className={classNames('react-status-manager',className)}
      data-status={status}
      {...props}
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
