import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

export default class extends Component {
  static displayName = 'RSM';
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.any,
    nodeName: PropTypes.any,
    virtual: PropTypes.bool
  };

  static defaultProps = {
    items: [],
    nodeName: 'div',
    virtual: false
  };
  /*===properties end===*/

  get children() {
    const { value, children, items } = this.props;
    return children.map((child, index) => {
      return value === items[index] ? child : null;
    });
  }

  render() {
    const { value, items, children, nodeName, virtual, ...props } = this.props;
    const _nodeName = virtual ? React.Fragment : nodeName;
    return React.createElement(_nodeName, {
      children: this.children,
      ...props
    });
  }
}
