import './App.css';
import './index.css';
import {Routes,Route} from "react-router-dom"
import {Login,Landing,Signup,Home} from "./features"
import { Dashboard, Progress, TttGame,Lvl1, Lvl2} from './pages';
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
       <Route path = "/progress/:language" element = {<Progress />} />
       <Route path = "/progress/:language/lvl1" element = {<Lvl1 />} />
       {/* <Route path='/cpp' element={<Cpp/>} /> */}
       <Route path = "/lvl2" element = {<Lvl2 />} />
       <Route path = "/tttgame" element = {<TttGame />} />
     </Routes>
    </div>
  );
}

export default App;
