import React, { FC, useState } from 'react';
import { hot } from 'react-hot-loader';
import { level1 } from '../../../levels/level1';
import { Level } from '../Level/Level';
// @ts-ignore
import styles from './Main.scss';

export const Main: FC = () => {
   const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

   return (
      <div className={styles.mainContainer}>
         <Level
            levelData={level1}
            onWin={() => setGameStatus(GameStatus.Won)}
            onLoose={() => setGameStatus(GameStatus.Lose)}
         />
         {gameStatus === GameStatus.Won && 'You won'}
         {gameStatus === GameStatus.Lose && 'You lose'}
      </div>
   );
};

export default hot(module)(Main);

enum GameStatus {
   Playing,
   Won,
   Lose,
}
