// import  from "./";
// import  from "./";
import styles from "./Videos.module.css";

import Video from "./Video"; // component

export default function Videos() {
    return (
        <>
            {/* className={styles.} /}
            {/ className={styles.} */}
            <div className={styles.videos}>
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>
        </>
    );
}
