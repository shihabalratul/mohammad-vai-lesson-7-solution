// import  from "./";
import Button from "../Form/Button";
import styles from "./ProgressBar.module.css";
// import logo from "";
import { Link } from "react-router-dom";

export default function ProgressBar() {
    return (
        <>
            {/* className={styles.} /}
            {/ className={styles.} */}
            <div className={styles.progressBar}>
                <div className={styles.backButton}>
                    <span className="material-icons-outlined">
                        {" "}
                        arrow_back{" "}
                    </span>
                </div>
                <div className={styles.rangeArea}>
                    <div className={styles.tooltip}>24% Cimplete!</div>
                    <div className={styles.rangeBody}>
                        <div
                            className={styles.progress}
                            style={{ width: "20%" }}
                        ></div>
                    </div>
                </div>
                <Link to="/result">
                    <Button className={styles.next}>
                        <span>Next Question</span>
                        <span className="material-icons-outlined">
                            {" "}
                            arrow_forward{" "}
                        </span>
                    </Button>
                </Link>
            </div>
        </>
    );
}
