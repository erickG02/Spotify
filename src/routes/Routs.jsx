import {Routes, Route} from 'react-router-dom';

import Home from '../components/Dashboard';
import Login from '../components/Login';


export default function AppRoutes (){
    return(
        <Routes>

           <Route path='/' element={<Home/>}></Route>
           <Route path='/login' element={<Login/>}></Route>

        </Routes>

    )
}