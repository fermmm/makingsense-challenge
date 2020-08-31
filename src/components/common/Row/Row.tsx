import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './Row.scss';

interface PropsColumn {
   wrap?: boolean;
}

export const Row: FC<PropsColumn> = ({ wrap, children }) => {
   return <div className={`${styles.row} ${wrap && styles.wrap}`}>{children}</div>;
};

export default hot(module)(Row);
