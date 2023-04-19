import Navbar from "./Comp/Navbar";
import Home from "./Comp/Home";
import About from "./Comp/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import NoteState from "./Context/Notes/NoteState";
import Login from "./Comp/Login";
import Signup from "./Comp/Signup";
import NotesPanda from "./Comp/NotesPanda";
function App() {

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/* {alert && <Alert/>} */}
          <Routes>
          <Route path="/" element={<NotesPanda />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
