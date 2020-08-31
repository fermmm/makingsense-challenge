import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import playerImage from '../../../../assets/images/mouse.png';
import { MapEntity, PropsMapEntity } from '../MapEntity/MapEntity';
// @ts-ignore
import styles from './Player.scss';

export const Player: FC<PropsMapEntity> = props => {
   return (
      <MapEntity {...props}>
         <img className={styles.player} src={playerImage} />
      </MapEntity>
   );
};

export default hot(module)(MapEntity);
