import React from 'react';

export default reactMemo(function Func({ title }) {
  console.log('Func component rendered');
  return <h1>Func - {title}</h1>;
});

function reactMemo(Component) {
  let previousProps = null;
  let previousRender = null;

  return function MemoizedComponent() {
    const args = [...arguments];
    const [props] = args;
    //next line not yet working, use reactPropsEquality
    if(reactPropsEquality(previousProps, props)) return previousRender;

    const render = <Component {...props} />;
    previousRender = render;
    previousProps = props;
    return <Component {...props} />;
  };
}

function reactPropsEquality(previousProps, props) {
  return previousProps && previousProps === props;
}

function memoize(fn, equality = defaultEquality) {
  //each prop is shallowly equal to previous prop
}

//once working, file with index.js & index.test.js, import react

