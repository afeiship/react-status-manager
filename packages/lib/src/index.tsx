import React, { Fragment, ReactNode, FC, PropsWithChildren } from 'react';

export interface ReactStatusManagerProps extends PropsWithChildren<any> {
  className?: string;
  items: any[];
  value?: any;
  as?: any;
  asProps?: any;
}

const defaults: ReactStatusManagerProps = {
  items: [],
  asProps: {},
};

const ReactStatusManager: FC<ReactStatusManagerProps> = (props) => {
  const {
    value,
    children,
    items,
    as: AsComponent = Fragment,
    asProps,
    ...restProps
  } = { ...defaults, ...props } as ReactStatusManagerProps;

  const renderChildren = () => {
    return React.Children.map(children, (child: ReactNode, index: number) => {
      const status = items[index];
      const isNestedArray = Array.isArray(status);
      if (typeof status !== typeof value && isNestedArray) {
        return status.includes(value) ? child : null;
      }
      return value === items[index] ? child : null;
    });
  };

  return React.createElement(AsComponent, { ...asProps, ...restProps, children: renderChildren() });
};

export default ReactStatusManager;
