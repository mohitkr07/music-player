import React from "react";
import styles from "./SongList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SongList = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles["top"]}>
        <div className={styles["top-nav"]}></div>
        <div className={styles["top-info"]}>
          <div className={styles["playlist-icon"]}></div>
          <div className={styles["playlist-info"]}>
            <p>Playlist</p>
            <p>Lliked songs</p>
            <p>1 song</p>
          </div>
        </div>
      </div>

      <div className={styles["bottom"]}>
        <div className={styles["play-options"]}></div>
        <div className={styles["song-table"]}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>
                  <FontAwesomeIcon icon={faClock} />
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>1</td>
                <td>title</td>
                <td>album</td>
                <td>3:40</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SongList;
