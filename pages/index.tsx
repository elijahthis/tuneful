import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/Drawer";
import SideBar from "../components/sidebar";
import Body from "../components/body";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tuneful</title>
        <meta property="og:title" content="Tuneful" key="title" />
      </Head>
      <main className={styles.container}>
        <div className={styles.container2}>
          <SideBar />
          <Body />
          {/* <Button variant="outlined" color="secondary" size="large">
        Haha
      </Button> */}
        </div>
      </main>
    </>
  );
};

export default Home;
