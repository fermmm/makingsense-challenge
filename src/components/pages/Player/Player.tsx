import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { Vector } from '../../../levels/tools/types/levelTypes';
// @ts-ignore
import styles from './Player.scss';

interface PropsPlayer {
   position: Vector;
   tilesSize: number;
}

export const Player: FC<PropsPlayer> = ({ position, tilesSize, children }) => {
   return (
      <div
         className={styles.player}
         style={{
            width: tilesSize,
            height: tilesSize,
            left: position.x * tilesSize,
            top: position.y * tilesSize,
         }}
      >
         {children}
      </div>
   );
};

export default hot(module)(Player);
