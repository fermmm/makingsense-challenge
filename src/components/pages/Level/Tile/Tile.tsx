import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './Tile.scss';

interface PropsPlayer {
   size: number;
   backgroundColor: string;
}

export const Tile: FC<PropsPlayer> = ({ backgroundColor, size, children }) => {
   return (
      <div className={styles.tile} style={{ backgroundColor, width: size, height: size }}>
         {children}
      </div>
   );
};

export default hot(module)(Tile);
