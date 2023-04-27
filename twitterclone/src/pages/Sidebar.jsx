import styles from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TagIcon from "@mui/icons-material/Tag";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.options}>
        <li className={styles.option}>
          <HomeIcon />
          Home
        </li>
        <li className={styles.option}>
          <TagIcon />
          Expolre
        </li>
        <li className={styles.option}>
          <NotificationsNoneIcon />
          Notifications
        </li>
        <li className={styles.option}>
          <MailOutlineIcon />
          Message
        </li>
        <li className={styles.option}>
          <BookmarkBorderIcon />
          Bookmarks
        </li>
        <li className={styles.option}>
          <TwitterIcon />
          Twitter Blue
        </li>
        <li className={styles.option}>
          <PersonIcon />
          Profile
        </li>
        <li className={styles.option}>
          <MoreHorizIcon />
          More
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
