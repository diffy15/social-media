import './App.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/login';
import Signup from './Pages/Register/signup';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} /> {/* Profile route without id parameter */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
