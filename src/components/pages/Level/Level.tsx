import { History } from 'history';
import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import styles from './Level.scss';

interface PropsLevel {
   
}

export const Level: FC<PropsLevel> = () => {
   const history: History = useHistory();

   return (
      <div className={styles.level}>
         not implemented
      </div>
   );
};

export default hot(module)(Level);
