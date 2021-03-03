import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CLASS_NAME = 'react-status-manager';

export default class ReactStatusManager extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The status list.
     */
    items: PropTypes.array,
    /**
     * Current status value.
     */
    value: PropTypes.any,
    /**
     * The node name.
     */
    nodeName: PropTypes.any,
    /**
     * If use React.Fragment element.
     */
    virtual: PropTypes.bool
  };

  static defaultProps = {
    items: [],
    nodeName: 'div',
    virtual: false
  };

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
