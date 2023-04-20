import './App.css';
import './index.css';
import {Routes,Route} from "react-router-dom"
import {Login,Landing,Signup,Home} from "./features"
import { Dashboard, Progress, TttGame,Lvl1, Lvl2, MemoryGameScreen, LightsOut} from './pages';
import { Navbar} from './component';
import { Lvl3 } from './pages/lvl3/Lvl3';


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
       <Route path = "/progress/:language/lvl2" element = {<Lvl2 />} />
       <Route path = "/progress/:language/lvl3" element = {<Lvl3 />} />
       <Route path = "/lvl2" element = {<Lvl2 />} />
       <Route path = "/lvl3" element = {<Lvl3 />} />
       <Route path = "/progress/:language/lvl1/tttgame" element = {<TttGame />} />
       <Route path = "/progress/:language/lvl2/memory-game" element = {<MemoryGameScreen />} />
       <Route path = "/progress/:language/lvl3/lightsout" element = {<LightsOut />} />

     </Routes>
    </div>
  );
}

export default App;
