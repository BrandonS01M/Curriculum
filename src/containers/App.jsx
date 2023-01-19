import {BrowserRouter, Routes, Route} from "react-router-dom";
import Curriculum from "../pages/Curriculum";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Curriculum/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default App;