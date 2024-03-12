import React from "react";
import styles from "./Playlist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import PlaylistCard from "../../../general/PlaylistCard";

// test-1
const Playlist = (props) => {
  const playlists = [
    { name: "Playlist 1", songCount: 1 },
    { name: "Playlist 2", songCount: 2 },
    { name: "Playlist 3", songCount: 3 },
    { name: "Playlist 4", songCount: 4 },
    { name: "Playlist 5", songCount: 5 },
    { name: "Playlist 6", songCount: 6 },
    { name: "Playlist 7", songCount: 7 },
    { name: "Playlist 8", songCount: 8 },
    { name: "Playlist 9", songCount: 9 },
    { name: "Playlist 10", songCount: 10 },
    { name: "Playlist 11", songCount: 11 },
    { name: "Playlist 12", songCount: 12 },
    { name: "Playlist 13", songCount: 13 },
    { name: "Playlist 14", songCount: 14 },
    { name: "Playlist 15", songCount: 15 },
    { name: "Playlist 16", songCount: 16 },
    { name: "Playlist 17", songCount: 17 },
    { name: "Playlist 18", songCount: 18 },
    { name: "Playlist 19", songCount: 19 },
    { name: "Playlist 20", songCount: 20 },
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["top"]}>
        <div className={styles["home"]}>
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </div>

        <div className={styles["search"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles["bottom"]}>
        <div className={styles["bottom-title"]}>
          <FontAwesomeIcon icon={faRecordVinyl} />
          <p>Playlist</p>
        </div>

        <div className={styles["playlists"]}>
          {playlists.map((playlist) => {
            return (
              <PlaylistCard
                name={playlist.name}
                songCount={playlist.songCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
