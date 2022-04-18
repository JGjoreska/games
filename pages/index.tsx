import type { NextPage } from "next";
import { Button } from "antd";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
// import styles from "../styles/Home.module.less";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.gamesContainer}>
      <div className={styles.gamesMenu}>
        <div className="headParagraph">
          <p>Choose a game</p>
        </div>
        <div className={styles.buttons}>
          <Button type="primary" block={true} href={"/XO"}>
            XO
          </Button>
          <Button type="primary" ghost={true} block={true} href={"/Wordle"}>
            Wrodle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
