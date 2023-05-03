import style from "./RightDownSection.module.css";
import { Button } from "@mui/material";
import { useState } from "react";

export function RightDownSection() {
  const [userData, setuserData] = useState([
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxUOMCGqeaHpA9gD_0avsOdEsNIsT0dquZA&usqp=CAU",
      name: "Virat kholi",
      username: "@imViratKholi",
      isFollow: false,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHCZf_dr4SdB7HAPZNWhAb2OmJBMiJkONUJ73QFESTDreK3V6PQVEp63Fv2e_G11I96A&usqp=CAU",
      name: "Anushka",
      username: "@imAnushka",
      isFollow: false,
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkkk-rx6Tszbjkzx2bQNjfBib2jidHart1A&usqp=CAU",
      name: "Allu Arjun",
      username: "@AlluArjun",
      isFollow: false,
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLy2jHeLblN1TkHzaNK1CCA73mKnMxEbYEw&usqp=CAU",
      name: "Mark Zuckerberg",
      username: "@Mark",
      isFollow: false,
    },
  ]);

  const handleFollowToggle = (index) => {
    setuserData((prevUserData) => {
      return prevUserData.map((user) => {
        if (user.id === index) {
          return { ...user, isFollow: !user.isFollow };
        } else {
          return user;
        }
      });
    });
  };

  return (
    <div className={style.main}>
      <h1>Who to follow</h1> <br />
      {userData.map((user) => (
        <div key={user.id} className={style.contain}>
          <img
            src={user.img}
            alt={user.name}
            style={{ borderRadius: "100%", width: "4.9rem", height: "4.4rem" }}
          />

          <div>
            <p className={style.h1}>{user.name}</p>

            <p className={style.h2}>{user.username}</p>
          </div>

          <div style={{ marginLeft: "6rem" }}>
            <Button
              variant="contained"
              className={style.btn}
              sx={{
                textTransform: "none",
                borderRadius: "5rem",
                width: "8rem",
                height: "2.4rem",
                fontSize: "1rem",
                backgroundColor: "#42a5f5",
                marginTop: "1rem",
              }}
              onClick={() => handleFollowToggle(user.id)}
            >
              {user.isFollow ? "Following" : "Follow"}
            </Button>
          </div>
        </div>
      ))}
      <br />
      <p className={style.more}>Show more...</p>
    </div>
  );
}
