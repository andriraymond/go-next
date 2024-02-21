import { startTransition } from "react";
import Links from "./links/links";
import styles from "./navbar.module.css";
const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.logo}>Logo{/* <a href="/ "><img src="https://www.flaticon.com/free-icon/send_2099189?term=share&page=1&position=13&origin=tag&related_id=2099189"></img></a> */}</div>
                <div className={styles.menu}><Links/></div>
            </div>
        </nav>
    );
};

export default Navbar