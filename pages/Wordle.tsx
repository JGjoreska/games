import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Input } from "antd";

const wordsList = ["Zdrav"];

const Wordle = () => {
  const [words, setWords] = useState(Array(6).fill(" "));
  const [word, setWord] = useState(" ");
  const [validWord, setValidWord] = useState(false);

  const validate = () => {
    setValidWord(word in wordsList ? true : false);
  };
  return (
    <div className={styles.wordContainer}>
      {words.map((wordElement, i) => {
        return (
          <div className={styles.word} key={i}>
            {/* <div className={styles.letterInput}> */}
            <Input
              className={styles.letterInput}
              // defaultValue=" "
              placeholder=" "
              disabled={false}
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
                setWord(e.target.value);
              }}
            />
            {/* </div> */}
            {/* <div className={styles.letterInput}> */}
            <Input
              className={styles.letterInput}
              // defaultValue=" "
              placeholder=" "
              disabled={false}
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
                setWord(word + e.target.value);
              }}
            />
            {/* </div> */}
            {/* <div className={styles.letterInput}> */}
            <Input
              className={styles.letterInput}
              // defaultValue=" "
              placeholder=" "
              disabled={false}
              maxLength={1}
              bordered={true}
              // value={word}
              onChange={(e) => {
                setWord(word + e.target.value);
              }}
            />
            {/* </div>
            <div className={styles.letterInput}> */}
            <Input
              className={styles.letterInput}
              placeholder=" "
              // defaultValue=" "
              disabled={false}
              maxLength={1}
              bordered={true}
              // value={word}
              onChange={(e) => {
                setWord(word + e.target.value);
              }}
            />
            {/* </div>
            <div className={styles.letterInput}> */}
            <Input
              className={styles.letterInput}
              placeholder=" "
              // defaultValue=" "
              disabled={false}
              maxLength={1}
              bordered={true}
              // value={word}
              onChange={(e) => {
                setWord(word + e.target.value);
              }}
              onPressEnter={validate}
            />
            {/* </div> */}
            <p>{word}</p>
            {/* {console.log("word" + word)}
            {console.log("words" + words)} */}
            {console.log("i" + i)}
          </div>
        );
      })}
    </div>
  );
};
export default Wordle;
