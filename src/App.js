import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import Cards from "./components/Cards";
import CardsDetails from "./components/CardsDetails";
import Profile from "./components/Profile";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Cards/>}/>
                <Route path='/cart/:id' element={<CardsDetails/>}/>
                <Route path='/userprofile' element={<Profile/>}/>
            </Routes>
        </>
    );
}

export default App;
