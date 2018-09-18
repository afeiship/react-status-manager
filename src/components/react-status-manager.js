import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import nodeName from 'react-default-node-name';

export default class extends Component {
  /*===properties start===*/
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
  /*===properties end===*/

  get children() {
    const { value, children, items } = this.props;
    return children.map((child, index) => {
      return value === items[index] ? child : null;
    });
  }

  render() {
    const { value, items, children, nodeName, ...props } = this.props;
    return createElement(nodeName, {
      children: this.children,
      ...props
    });
  }
}
