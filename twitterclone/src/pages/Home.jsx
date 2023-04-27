// import react, { useEffect, useState } from 'react';

import { useRecoilValue } from "recoil";
import { isLogin } from "./Atom";
// import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import PostSection from "./PostSection";

// import './style.css';

function Home() {
  const islogin = useRecoilValue(isLogin);

  return (
    <>
      <div className={styles.container}>
        {islogin && <Sidebar />}
        <div className={styles.main}>
          {!islogin && <h1>Welcome to home page</h1>}
          {islogin && <PostSection />}
        </div>
        <div className={styles.search}>{islogin && <SearchBar />}</div>
      </div>
      {!islogin && <Footer />}
    </>
  );
}

export default Home;
