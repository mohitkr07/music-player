import React from "react";
import styles from "./Container.module.css";
import Playlist from "./playlist/Playlist";
import SongList from "./songList/SongList";
import SongDetail from "./songDetail/SongDetail";

const Container = (props) => {
  return (
    <div className={styles.container}>
      {/* <Playlist /> */}
      <SongList />
      <SongDetail />
    </div>
  );
};

export default Container;
