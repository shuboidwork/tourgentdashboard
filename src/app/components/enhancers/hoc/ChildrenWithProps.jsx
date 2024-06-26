import React from 'react';

const ChildrenWithProps = ({ children, ...props }) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...props });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

export default ChildrenWithProps;
