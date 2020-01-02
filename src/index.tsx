import { useEffect, useState } from 'react';

export const useMyHook = () => {
  let [{ counter }, setState] = useState<{
    counter: number;
  }>({
    counter: 0
  });

  useEffect(() => {
    let interval = window.setInterval(() => {
      counter++;
      setState({ counter });
    }, 100);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return counter;
};
