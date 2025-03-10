import { FC, PropsWithChildren } from 'react';
import {
  ErrorBoundary as UIErrorBoundary,
  ErrorBoundaryPropsWithRender,
} from 'react-error-boundary';
import { Fallback } from './components/fallback';

const ErrorBoundary: FC<
  PropsWithChildren<Partial<ErrorBoundaryPropsWithRender>>
> = ({ children, ...props }) => {
  return (
    <UIErrorBoundary {...props} fallbackRender={Fallback}>
      {children}
    </UIErrorBoundary>
  );
};

export default ErrorBoundary;
