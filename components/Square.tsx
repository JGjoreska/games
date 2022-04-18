import { Button } from "antd";
import React from "react";
import styles from "../styles/Home.module.css";

interface IProps {
  state: string;
  onClick: () => void;
}

function Square({ state, onClick }: IProps) {
  return (
    <div className={styles.square}>
      <Button type="default" block={true} onClick={onClick}>
        {state}
      </Button>
    </div>
  );
}

export default React.memo(Square);
