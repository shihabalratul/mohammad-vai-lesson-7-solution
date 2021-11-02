import "./App";
import Home from "../pages/Home";
import Layout from "./Layout/Layout";
import "../styles/App.css";
import Signup from "../pages/Signup";
function App() {
    return (
        <div>
            <Layout>
                {/* <Home></Home> */}
                <Signup></Signup>
            </Layout>
        </div>
    );
}

export default App;
