// import  from "./";
// import  from "./";
import styles from "./TextInput.module.css";
// import logo from "";

// export default function TextInput({ type, placeholder }) {
//     return (
//         <>
//             {/* className={styles.} /}
//             {/ className={styles.} */}
//             <div className={styles.textInput}>
//                 <input type={type} placeholder={placeholder} />
//                 <span className="material-icons-outlined"> person </span>
//             </div>
//         </>
//     );
// }
// export default function TextInput(props) {
//     return (
//         <>
//             {/* className={styles.} /}
//             {/ className={styles.} */}
//             <div className={styles.textInput}>
//                 <input {...props} />
//                 <span className="material-icons-outlined"> person </span>
//             </div>
//         </>
//     );
// }
export default function TextInput({ icon, ...rest }) {
    return (
        <>
            {/* className={styles.} /}
            {/ className={styles.} */}
            <div className={styles.textInput}>
                <input {...rest} />
                <span className="material-icons-outlined"> {icon} </span>
            </div>
        </>
    );
}
