import React from 'react';

// const withClass = props => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// );

// With this approach, would need to wrap App in App.js with this.
// e.g. `export default withClass(App, classes.App)`
// and use in conjunction with aux or fragment.
// instead of <WithClasses>content</WithClasses>
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
};

export default withClass;