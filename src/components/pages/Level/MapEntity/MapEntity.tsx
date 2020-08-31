import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { Vector } from '../../../../levels/tools/types/levelTypes';
// @ts-ignore
import styles from './MapEntity.scss';

export interface PropsMapEntity {
   position: Vector;
   tilesSize: number;
   className?: string;
}

export const MapEntity: FC<PropsMapEntity> = ({ position, tilesSize, className, children }) => {
   return (
      <div
         className={`${styles.mapEntity} ${className && className}`}
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

export default hot(module)(MapEntity);
