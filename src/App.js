import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from "react";
import {USERS_DATA} from "./constants/Constats";
import Landing from "./components/Landing";
import Catalog from "./components/catalog/Catalog";
import MovieDetail from "./components/catalog/movie/MovieDetail";

function App() {

    const [users, setUser] = useState(USERS_DATA)
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={ <Landing users={users}/>} />
                <Route path={'/:catalog'} element={<Catalog />} />
                <Route path="/movies/:id" component={<MovieDetail />} />
            </Routes>
        </Router>
    )
}

export default App;
