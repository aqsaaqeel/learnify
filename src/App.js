import './App.css';
import './index.css';
import {Routes,Route} from "react-router-dom"
import {Login,Landing,Signup,Home} from "./features"
import { Dashboard, Progress, TttGame,Lvl1, Lvl2, Lvl3, Lvl4, Lvl5, MemoryGameScreen, LightsOut, FillInBlanks} from './pages';
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
       <Route path = "/progress/:language/lvl2" element = {<Lvl2 />} />
       <Route path = "/progress/:language/lvl3" element = {<Lvl3 />} />
       <Route path = "/progress/:language/lvl4" element = {<Lvl4 />} />
       <Route path = "/progress/:language/lvl5" element = {<Lvl5 />} />

       <Route path = "/lvl2" element = {<Lvl2 />} />
       <Route path = "/lvl3" element = {<Lvl3 />} />
       <Route path = "/progress/:language/lvl1/tttgame" element = {<TttGame />} />
       <Route path = "/progress/:language/lvl2/memory-game" element = {<MemoryGameScreen />} />
       <Route path = "/progress/:language/lvl3/lightsout" element = {<LightsOut />} />
       <Route path = "/progress/:language/lvl4/fillinblanks" element = {<FillInBlanks />} />

     </Routes>
    </div>
  );
}

export default App;
