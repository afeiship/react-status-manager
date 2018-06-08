import { Component, createElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    statusList: PropTypes.array,
    status: PropTypes.any,
    nodeName: PropTypes.any
  };

  static defaultProps = {
    statusList: [],
    nodeName: 'div'
  };
  /*===properties end===*/

  get children(){
    const { status, children, statusList } = this.props;
    return children.map((child, index) => {
      return status === statusList[index] ? child : null;
    });
  }

  render() {
    const { className, status, statusList, children, nodeName, ...props } = this.props;
    return createElement(nodeName,{
      'data-status': status,
      children: this.children,
      ...props
    });
  }
}
