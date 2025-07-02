import {Routes, Route} from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Home from '../components/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';

export default function AppRoutes (){
    return(
        <Routes>

           <Route path="/home"element={<PrivateRoute><Home /></PrivateRoute>}/>
           <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>

    )
}