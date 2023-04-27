import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tweetData } from "./Atom";

export default function PostSection() {
  const [tweet, setTweet] = useRecoilState(tweetData);

  useEffect(() => {
    fetch("/tweet.json")
      .then((res) => res.json())
      .then((data) => setTweet(data));
  }, []);

  return (
    <>
      {tweet.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>{item.content}</p>
            <img
              style={{ width: "500px", height: "500px" }}
              src={item.image}
              alt="image"
            />
          </div>
        );
      })}
    </>
  );
}
