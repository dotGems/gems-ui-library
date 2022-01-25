import React, { useEffect, useRef } from 'react';

/**
 * Using intervals in React causes problems to the render cycle.
 * To remedy to the situation, we can use this custom hook (made by
 * Dan Abramov -- React developer @ Facebook) as described here;
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 * @param {Function} callback Function to be called when the delay is up
 * @param {Number} delay delay in ms
 */
function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}