import {useState} from 'react';

import {emitter} from '.';

const useIncrementListener = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  emitter.addListener('increment', increment);
  emitter.addListener('decrement', decrement);

  return count;
};

const emitIncrement = () => {
  emitter.emit('increment');
};

const emitDecrement = () => {
  emitter.emit('decrement');
};

export {emitDecrement, emitIncrement, useIncrementListener};
