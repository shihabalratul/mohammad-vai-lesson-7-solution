// import  from "./";
// import  from "./";
import styles from "./Illustration.module.css";
import signupImage from "../../assets/images/signup.svg";

export default function Illustration() {
    return (
        <>
            {/* className={styles.} /}
            {/ className={styles.} */}
            <div className={styles.illustration}>
                <img src={signupImage} alt="Signup" />
            </div>
        </>
    );
}
