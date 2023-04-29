import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import FrontPage from "./pages/FrontPage"

function App() {
  return (
    <div >

      <Router>
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
