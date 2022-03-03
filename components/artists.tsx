import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/body.module.scss";
import davidoBanner from "../images/david-banner.jpg";
import jColeBanner from "../images/jcole-banner.jpg";
import wizkidBanner from "../images/wiz-banner.jpg";
import eminemBanner from "../images/eminem-banner.jpg";

const songList = [
  { title: "Run My Race", artist: "Burna Boy" },
  { title: "Run My Race", artist: "Burna Boy" },
  { title: "Run My Race", artist: "Burna Boy" },
];

const Artists: React.FC = () => {
  const [artistBanners, setArtistBanners] = useState([
    { name: "Davido", albums: 4, listeners: 150000, banner: davidoBanner },
    { name: "Wizkid", albums: 5, listeners: 140000, banner: wizkidBanner },
    { name: "J. Cole", albums: 12, listeners: 200000, banner: jColeBanner },
    { name: "Eminem", albums: 12, listeners: 1500000, banner: eminemBanner },
    { name: "Davido", albums: 4, listeners: 150000, banner: davidoBanner },
  ]);
  const [trans, setTrans] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrans((trans) => {
        if (trans < artistBanners.length - 2) {
          return trans + 1;
        }
        return 0;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <h4 className={styles.title}>Artists</h4>
      <h2>Most Popular</h2>
      <div
        className={styles.carousel}
        style={{
          transform: `translate3d(${
            -(1 / artistBanners.length) * 100 * trans
          }%, 0, 0)`,
        }}
      >
        {artistBanners.map((artist, ind) => (
          <div className={styles["banner-item"]} key={ind}>
            <Image src={artist.banner} />
            <div>
              <div>
                <p>{artist.name}</p>
                <p>
                  {artist.albums} Albums | {artist.listeners} Listeners
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <div>
          <h3>This Week: Most Trending Music</h3>
          <div>
            {songList.map((song, ind) => (
              <div className={styles["song-item"]} key={ind}>
                <div>
                  <div>
                    <span>{ind + 1}</span>
                    <span>
                      {song.artist} - {song.title}
                    </span>
                  </div>
                </div>
                5:32
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Listen this Weekend</h3>
          <div>
            {songList.map((song, ind) => (
              <div className={styles["song-item"]} key={ind}>
                <div>
                  {ind + 1}
                  {song.artist} - {song.title}
                </div>
                5:32
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
