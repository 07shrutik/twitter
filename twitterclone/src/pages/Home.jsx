// import react, { useEffect, useState } from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';


function Home() {
  const [data, setData] = useState(false);
  useEffect(() => {
    let res = JSON.parse(localStorage.getItem('isLogin'));
    setData(res);
  }, []);

  return (
    <div>
      Home
      {data && <li>done</li>}
      <button><Link to="/login">Login</Link></button>
    </div>
  );
}

export default Home;
