import React from "react";
import styles from "./PlaylistCard.module.css";
import SampleIcon from "../assets/images/playlistIcon.jpg";

const PlaylistCard = ({ name, songCount }) => {
  console.log(name, songCount);

  return (
    <div className={styles.container}>
      <div className={styles["playlist-icon"]}>
        <img src={SampleIcon} />
      </div>

      <div className={styles["playlist-detail"]}>
        <p>{name}</p>
        <p>{songCount} songs</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
