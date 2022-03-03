import React from "react";
import Image from "next/image";
import styles from "../styles/sidebar.module.scss";
import Logo from "./logo";

const SideBar: React.FC = () => {
  const library: string[] = [
    "Playlists",
    "Artists",
    "Albums",
    "Songs",
    "Genres",
  ];
  const options: string[] = ["Favourite Songs", "Radio", "Settings"];
  return (
    <aside className={styles.sidebar}>
      <div>
        <Logo />
        <div>
          <h5>LIBRARY</h5>
          {library.map((item, ind) => (
            <p key={ind}>{item}</p>
          ))}
        </div>
        <div>
          <h5>FOR YOU</h5>
          {options.map((item, ind) => (
            <p key={ind}>{item}</p>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
