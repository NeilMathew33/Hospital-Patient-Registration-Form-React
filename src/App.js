import logo from './logo.svg';
import './App.css';
import AddPatient from './container/AddPatient';
import SearchPatient from './container/SearchPatient';
import DeletePatient from './container/DeletePatient';
import ViewAllPatients from './container/ViewAllPatients';
import PatientNavBar from './container/PatientNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './container/Login';
import SignUp from './container/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddPatient />}/>
      <Route path="/search" element={<SearchPatient />}/>
      <Route path="/delete" element={<DeletePatient />}/>
      <Route path="/ViewAll" element={<ViewAllPatients />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/SignUp" element={<SignUp />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
