import './App.css';
import './index.css';
import {Routes,Route} from "react-router-dom"
import {Login,Landing,Signup,Home} from "./features"
import { Dashboard, Progress, Lvl1, TttGame, Lvl2, Python, Clang, Java, Lvc1, Lvpy1, Lvcpp1, Lvjava1 } from './pages';
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
       <Route path = "/lvl1" element = {<Lvl1 />} />
       <Route path = "/python" element = {<Python/>} />
       <Route path='/lvlpy' element = {<Lvpy1/>} />
       <Route path='/c' element={<Clang/>} />
       <Route path='/lvlc' element={<Lvc1/>}/>
       {/* <Route path='/cpp' element={<Cpp/>} /> */}
       <Route path='/lvlcpp' element={<Lvcpp1/>}/>
       <Route path='java' element={<Java/>} />
       <Route path='lvljava' element={<Lvjava1/>}/>
       <Route path = "/lvl2" element = {<Lvl2 />} />
       <Route path = "/tttgame" element = {<TttGame />} />
     </Routes>
    </div>
  );
}

export default App;
