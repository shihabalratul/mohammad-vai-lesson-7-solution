// import  from "./";
// import  from "./";
// import styles from "./.module.css";
// import logo from "";

export default function Checkbox({ text, ...rest }) {
    return (
        <>
            {/* className={styles.} /}
            {/ className={styles.} */}
            <label>
                <input type="checkbox" {...rest} />
                <span> {text}</span>
            </label>
        </>
    );
}
