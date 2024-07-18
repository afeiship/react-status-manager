import React, { Fragment, Component, ReactNode } from 'react';

type ItemsCallback = (args: { child: ReactNode; index: number; value: any }) => ReactNode;

export interface ReactStatusManagerProps extends React.PropsWithChildren<any> {
  className?: string;
  items: any[] | ItemsCallback;
  value?: any;
  as?: any;
  asProps?: any;
}

export default class ReactStatusManager extends Component<ReactStatusManagerProps> {
  static defaultProps = {
    items: [],
    asProps: {},
  };

  get children() {
    const { value, children, items } = this.props;
    return children.map((child: ReactNode, index: number) => {
      if (typeof items === 'function') return items({ child, index, value });
      const status = items[index];
      const isNestedArray = Array.isArray(status);
      if (typeof status !== value && isNestedArray) {
        return status.includes(value) ? child : null;
      }
      return value === items[index] ? child : null;
    });
  }

  render() {
    const { value, items, children, as, asProps, ...props } = this.props;
    const AsComponent = as || Fragment;
    return React.createElement(AsComponent, { children: this.children, ...asProps, ...props });
  }
}
