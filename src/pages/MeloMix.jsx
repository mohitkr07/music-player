import React from "react";
import styles from "./MeloMix.module.css";
import Container from "../components/container/Container";
import MusicBar from "../components/musicBar/MusicBar";

const MeloMix = (props) => {
  return (
    <div className={styles.container}>
      <Container />
      <MusicBar />
    </div>
  );
};

export default MeloMix;
