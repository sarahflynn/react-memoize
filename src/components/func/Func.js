import React from 'react';
import memoize from '../memoize/memoize';

export default memoize(function Func({ title }) {
  console.log('Func component rendered');
  return (
    <h1>Func - {title}</h1>
  );
});
