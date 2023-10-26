import './App.css'
import { Route, Routes } from 'react-router-dom'
import { UsersTable } from './components/table/UsersTable'
import { Login } from './components/login/Login'
import { Container } from './Container.styled';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/table" element={<UsersTable />}></Route>
        </Routes>
    </div>
  );
}

export default App;
