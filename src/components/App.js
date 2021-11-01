import "./App";
import Home from "../pages/Home";
import Layout from "./Layout/Layout";
import "../styles/App.css";
function App() {
    return (
        <div>
            <Layout>
                <Home></Home>
            </Layout>
        </div>
    );
}

export default App;
