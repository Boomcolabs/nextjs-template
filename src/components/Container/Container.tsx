import React from 'react';
import clsx from 'clsx';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={clsx('p-xl', className)} {...rest}>
      {children}
    </div>
  );
}
