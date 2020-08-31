import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './Column.scss';

interface PropsColumn {
   wrap?: boolean;
}

export const Column: FC<PropsColumn> = ({ wrap, children }) => {
   return <div className={`${styles.column} ${wrap && styles.wrap}`}>{children}</div>;
};

export default hot(module)(Column);
