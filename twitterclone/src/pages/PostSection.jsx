// import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { tweetData } from "./Atom";
// import { userData } from "./Atom";
// import { Avatar } from "@mui/material";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import styles from "./PostSection.module.css";

// export default function PostSection() {
//   const [tweet, setTweet] = useRecoilState(tweetData);
//   const [user, setUser] = useRecoilState(userData);

//   useEffect(() => {
//     fetch("/tweet.json")
//       .then((res) => res.json())
//       .then((data) => setTweet(data));

//     fetch("/users.json")
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);

//   return (
//     <>
//       {tweet.map((item, index) => {
//         const currentUser = user[index];
//         return (
//           <div key={index}>
//             <div className={styles.container}>
//               <div>
//                 <div className={styles.main}>
//                   <p>{currentUser.name}</p>
//                 </div>
//                 <div className={styles.btn}>
//                   <MoreHorizIcon />
//                 </div>
//               </div>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <p>{item.content}</p>
//               <img
//                 style={{ width: "500px", height: "500px" }}
//                 src={item.image}
//                 alt="image"
//               />
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tweetData } from "./Atom";
import { userData } from "./Atom";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./PostSection.module.css";

export default function PostSection() {
  const [tweet, setTweet] = useRecoilState(tweetData);
  const [user, setUser] = useRecoilState(userData);

  useEffect(() => {
    fetch("/tweet.json")
      .then((res) => res.json())
      .then((data) => setTweet(data));

    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const renderPosts = () => {
    const posts = [];

    for (let i = 0; i < tweet.length; i++) {
      const currentUser = user[i];

      if (currentUser && currentUser.name) {
        posts.push(
          <div key={i}>
            <div className={styles.container}>
              <div>
                <div>
                  <Avatar alt="Remy Sharp" src={currentUser.images} />
                </div>
                <div className={styles.main}>
                  <p>{currentUser.name}</p>
                </div>
                <div className={styles.btn}>
                  <MoreHorizIcon />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>{tweet[i].content}</p>
              <img
                style={{ width: "500px", height: "500px" }}
                src={tweet[i].image}
                alt="image"
              />
            </div>
          </div>
        );
      }
    }

    return posts;
  };

  return <>{renderPosts()}</>;
}
