import { useKeyPress } from 'ahooks';
import equal from 'fast-deep-equal';
import React, { FC, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { MapTools } from '../../../levels/tools/mapTools';
import { LevelData, TileData, Vector } from '../../../levels/tools/types/levelTypes';
import { Column } from '../../common/Column/Column';
import { Row } from '../../common/Row/Row';
import { FinishTile } from './FinishTile/FinishTile';
// @ts-ignore
import styles from './Level.scss';
import { Player } from './Player/Player';
import { Tile } from './Tile/Tile';

interface PropsLevel {
   levelData: LevelData;
   onWin: () => void;
   onLoose: () => void;
}

export const Level: FC<PropsLevel> = ({ levelData, onWin, onLoose }) => {
   const colors: Record<TileData, string> = {
      [TileData.Walkable]: 'white',
      [TileData.Obstacle]: '#adadad',
   };
   const tileSize: number = 80;

   const [playerPos, setPlayerPos] = useState<Vector>(levelData.startPos);
   const [remainingMoves, setRemainingMoves] = useState<number>(levelData.movesAvailable);
   const [playerMovementEnabled, setPlayerMovementEnabled] = useState<boolean>(true);

   useKeyPress('ArrowLeft', () => {
      movePlayer({ ...playerPos, x: playerPos.x - 1 });
   });

   useKeyPress('ArrowRight', () => {
      movePlayer({ ...playerPos, x: playerPos.x + 1 });
   });

   useKeyPress('ArrowUp', () => {
      movePlayer({ ...playerPos, y: playerPos.y - 1 });
   });

   useKeyPress('ArrowDown', () => {
      movePlayer({ ...playerPos, y: playerPos.y + 1 });
   });

   useEffect(() => {
      if (equal(playerPos, levelData.finishPos)) {
         setPlayerMovementEnabled(false);
         onWin();
         return;
      }

      if (remainingMoves === 0) {
         setPlayerMovementEnabled(false);
         onLoose();
         return;
      }
   }, [remainingMoves]);

   const movePlayer = (newPos: Vector): void => {
      if (!playerMovementEnabled) {
         return;
      }

      if (!MapTools.positionIsWalkable(newPos, levelData.map)) {
         return;
      }

      setPlayerPos(newPos);
      setRemainingMoves(remainingMoves - 1);
   };

   return (
      <div className={styles.mainContainer}>
         <div className={styles.mapContainer}>
            <Column>
               {levelData.map.map((row, i) => (
                  <Row key={i}>
                     {row.map((tileData, u) => (
                        <Tile backgroundColor={colors[tileData]} size={tileSize} key={u} />
                     ))}
                  </Row>
               ))}
            </Column>
            <FinishTile position={levelData.finishPos} tilesSize={tileSize} />
            <Player position={playerPos} tilesSize={tileSize} />
         </div>
         Moves left: {remainingMoves}
      </div>
   );
};

export default hot(module)(Level);
