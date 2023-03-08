import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './LoginForm/Login';

function App() {
  return (
    <div className="App1">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
