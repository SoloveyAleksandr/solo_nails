import React, { FC } from 'react';

import styles from './Header.module.css';

interface IHeader { };

const Header: FC<IHeader> = () => {
  return (
    <header className={styles.header}>
      <h1>header</h1>
    </header>
  )
};

export default Header;
