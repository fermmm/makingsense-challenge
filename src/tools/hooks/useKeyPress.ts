import { useEffect } from 'react';

export const useKeyPress = (code: string, action: () => void) => {
   useEffect(() => {
      const listener = (e: KeyboardEvent) => {
         if (e.code !== code) {
            return;
         }
         action();
      };
      window.addEventListener('keydown', listener);
      return () => window.removeEventListener('keydown', listener);
   }, [action]);
};
