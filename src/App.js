import './App.css';
import './index.css';
import {Routes,Route} from "react-router-dom"
import {Login,Landing, Signup,Home} from "./features"
import { Dashboard, JavaScript, Lvl1 } from './pages';
import { Navbar} from './component';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="login" element={<Login />} />
       <Route path="signup" element={<Signup />} />
       <Route path="/home" element={<Home />} />
       <Route path = "/dashboard" element = {<Dashboard />} />
       <Route path = "/javascript" element = {<JavaScript />} />
       <Route path = "/lvl1" element = {<Lvl1 />} />
     </Routes>
    </div>
  );
}

export default App;
