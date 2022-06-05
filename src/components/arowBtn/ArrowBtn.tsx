import React, { FC } from "react";

import styles from './ArrowBtn.module.css';

interface IArrowBTN {
  right?: boolean;
  handleClick(): void;
};

const ArrowBtn: FC<IArrowBTN> = ({
  right,
  handleClick,
}) => {
  return (
    <button
      className={right ? `${styles.button} ${styles.right}` : styles.button}
      onClick={handleClick} ></button >
  );
};

export default ArrowBtn;