// import  from "./";
// import  from "./";
import styles from "./Form.module.css";
// import logo from "";

export default function Form({ children, className, ...rest }) {
    // rest of the props amra receive korbo .. mane aro ja pabo .. shegula receive korbo
    return (
        <>
            {/* className={styles.} /}
            {/ className={styles.} */}
            <form
                className={`${className} ${styles.form}`}
                // class="signup form"
                action="#"
                {...rest}
            >
                {children}
            </form>
        </>
    );
}
