import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp';
import Land from './Components/Land';
import Login from './Components/Login';
import Faq from "./Components/Faq";
import Dashboard from './Components/Dashboard';
import EventForm from './Components/EventForm'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BudgetForm from './Components/BudgetForm';
import InvitationPage from './Components/InvitationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event-form" element={<EventForm />} /> 
        <Route path="/budget-form" element={<BudgetForm/>} /> 
        <Route path="/invitation" element={<InvitationPage/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
