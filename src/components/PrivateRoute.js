// logged in state ta bujhar jonno amra current user ta dorkar hobe .. useAuth ta amar lagbe
import { useAuth } from "../contexts/AuthContext";
import {
    Route,
    useNavigate,
    Navigate,
    Redirect,
    Routes,
    Outlet,
} from "react-router-dom";

export default function PrivateRoute({ children }) {
    // alias kore nilam .. element ke ekhon Element hishebeo access kora jabe ..
    const { currentUser } = useAuth(); // currentUser thakar manei hocche state ta logged in
    const navigate = useNavigate();
    return currentUser ? (
        children
    ) : (
        // <Element></Element>
        // render props pattern er moto..Child hishebe Component / Element ta dia dite pari
        // exact ar path egula rest hishebe receive hobe .. shegula Route er argument
        // hishebe pass kore dilam .. ar <Element> ta child heshebe pass kore dilam ..
        // Element er o argument thakte pare .. shegula thakleo props akare receive hobe
        // ar ar <Element er argument hishebe pass kore dibo
        // Good Practice
        <Navigate to="/login" />
        // <Redirect to="/login" />
    );
}
