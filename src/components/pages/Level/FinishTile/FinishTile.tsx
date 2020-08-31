import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import finishImage from '../../../../assets/images/cheese.png';
import { MapEntity, PropsMapEntity } from '../MapEntity/MapEntity';
// @ts-ignore
import styles from './FinishTile.scss';

export const FinishTile: FC<PropsMapEntity> = props => {
   return (
      <MapEntity {...props}>
         <img className={styles.finishTile} src={finishImage} />
      </MapEntity>
   );
};

export default hot(module)(MapEntity);
