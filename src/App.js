import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./css/App.css"
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import {USERS_DATA} from "./constants/Constats";
import Landing from "./components/Landing";
import Catalog from "./components/catalog/Catalog";

function App() {

    const [users, setUser] = useState(USERS_DATA)
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={ <Landing users={users}/>} />
                <Route path={'/:catalog'} element={<Catalog />} />
            </Routes>
        </Router>
    )
}

export default App;
