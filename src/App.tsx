import './App.css'
import HomePage from "./pages/home/HomePage.tsx";
import {Route, Routes} from "react-router-dom";
import "./i18n.ts";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </>
    )
}

export default App
