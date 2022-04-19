import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Input } from "antd";
import classNames from "classnames";

const validWordsList = ["Zdrav", "Biser", "Krava"];
function getRandomInt(wordListLength: number) {
  return Math.floor(Math.random() * wordListLength);
}
const randomNumer = getRandomInt(validWordsList.length);

const Wordle = () => {
  const [todaysWord, setTodaysWord] = useState(validWordsList[randomNumer]);
  const [words, setWords] = useState(Array(6).fill(" "));
  const word = [" ", " ", " ", " ", " "];
  const [isWordValid, setIsWordValid] = useState(false);
  const [key, setKey] = useState(0);
  let pomoshno = 0;

  // const todatsWordGenerator = () => {
  // setTodaysWord(validWordsList[randomNumer]);
  console.log({ randomNumer });
  console.log({ todaysWord });
  // };

  return (
    <div className={styles.wordContainer}>
      {words.map((wordElement, i) => {
        return (
          <div
            className={classNames({
              [styles.redText]: !isWordValid,
              [styles.word]: true,
            })}
            key={i}
          >
            <Input
              className={styles.letterInput}
              placeholder=" "
              disabled={!(i === key)}
              maxLength={1}
              bordered={true}
              // value={word}
              onChange={(e) => {
                word[0] = e.target.value;
              }}
            />
            <Input
              className={styles.letterInput}
              placeholder=" "
              disabled={!(i === key)}
              maxLength={1}
              bordered={true}
              // value={word}
              onChange={(e) => {
                {
                  console.log("word ", { word });
                }
                {
                  console.log("e.target.value", e.target.value);
                }
                word[1] = e.target.value;
              }}
            />
            <Input
              className={styles.letterInput}
              placeholder=" "
              disabled={!(i === key)}
              maxLength={1}
              bordered={true}
              // value={word}
              onChange={(e) => {
                word[2] = e.target.value;
              }}
            />
            <Input
              className={styles.letterInput}
              placeholder=" "
              disabled={!(i === key)}
              maxLength={1}
              bordered={true}
              // value={word}
              onChange={(e) => {
                word[3] = e.target.value;
              }}
            />
            <Input
              className={styles.letterInput}
              placeholder=" "
              disabled={!(i === key)}
              maxLength={1}
              bordered={true}
              onChange={(e) => {
                word[4] = e.target.value;
                setIsWordValid(
                  validWordsList.indexOf(word.join("")) != -1 ? true : false
                );
                console.log("word:", word);
                console.log(" wordtoString():", word.join("").toString());
                console.log("todaysWord:", todaysWord);
              }}
              onPressEnter={() => {
                console.log({ word });
                if (isWordValid) {
                  console.log("AMAN");
                  todaysWord.localeCompare(word.join("")) === 0
                    ? console.log("ConGRADS!")
                    : setKey(key + 1 + pomoshno);
                }
                console.log({ isWordValid });
                setIsWordValid(false);
              }}
            />
            <p>{word.join("")}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Wordle;
