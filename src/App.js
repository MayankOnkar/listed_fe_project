import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
