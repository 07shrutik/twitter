import style from "./RightSection.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export function RightSection() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const data = [
    {
      id: 1,
      ids: "Sports - Trending",
      name: "Delhi Police",
      likes: "112K Tweets",
    },
    {
      id: 2,
      ids: "Only on Twitter-Trending",
      name: "#WahajAli",
      likes: "8,046 Tweets",
    },
    {
      id: 3,
      ids: "Sports-Trending",
      name: "Lucknow",
      likes: "15.1K Tweets",
    },
  ];

  const [notInterested, setNotInterested] = useState([]);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1> What's Happening</h1>

        {data.map(
          (item) =>
            !notInterested.includes(item.id) && (
              <div key={item.id}>
                <br />
                <br />
                <span>{item.ids}</span>
                <MoreHorizIcon
                  sx={{
                    float: "right",
                    marginRight: "1rem",
                    cursor: "pointer",
                    size: "1rem",
                  }}
                  onClick={handleOpen}
                />

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      bgcolor: "white",
                      border: "2px solid #000",
                      color: "black",
                      p: 4,
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      sx={{
                        mt: 2,
                        "&:hover:active": {
                          backgroundColor: "yellow",
                        },
                      }}
                    >
                      Interested
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      variant="h6"
                      sx={{
                        mt: 2,
                        "&:hover:active": {
                          backgroundColor: "white",
                        },
                      }}
                      onClick={() => {
                        setNotInterested([...notInterested, item.id]);
                        handleClose();
                      }}
                    >
                      Not Interested
                    </Typography>
                  </Box>
                </Modal>

                <br />
                <br />
                <span className={style.p}> {item.name}</span>
                <br />
                <br />
                <span> {item.likes}</span>
              </div>
            )
        )}

        <br />
        <p className={style.more}>Show More ...</p>
      </div>
    </div>
  );
}
