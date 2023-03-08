import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './LoginForm/Login';
import Registration from './Registration/Registration';

function App() {
  return (
    <div className="App1">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
