import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
