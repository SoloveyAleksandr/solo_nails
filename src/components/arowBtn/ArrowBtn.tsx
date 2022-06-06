import React, { FC } from "react";

import styles from './ArrowBtn.module.css';

interface IArrowBTN {
  handleClick(): void;
};

const ArrowBtn: FC<IArrowBTN> = ({
  handleClick,
}) => {
  return (
    <button
      className={styles.button}
      onClick={handleClick} >
    </button >
  );
};

export default ArrowBtn;