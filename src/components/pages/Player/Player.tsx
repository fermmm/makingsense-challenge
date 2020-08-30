import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './Player.scss';

interface PropsPlayer {
   // ... Your props here ...
}

export const Player: FC<PropsPlayer> = () => {
   return (
      <div className={styles.player}>
         not implemented
      </div>
   );
};

export default hot(module)(Player);
