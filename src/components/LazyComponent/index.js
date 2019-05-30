import React, { Suspense, lazy } from 'react';

export function withLazyComponent(Component, options = {}) {
  return props => {
    return (
      <Suspense fallback={<span>Loading...</span>}>
        <Component {...props} />
      </Suspense>
    )
  };
}

const lazyComponent = (fn, options) => withLazyComponent(lazy(fn), options)
export default lazyComponent