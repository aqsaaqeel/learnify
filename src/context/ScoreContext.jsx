import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();
const useScores = () => useContext(ScoreContext);

const ScoreProvider = ({children}) => {
    const [scores, setScores] = useState({
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
        level5: 0,
        total: 0,
      });
      return(
        <ScoreContext.Provider value = {{scores, setScores}} >
            {children}
        </ScoreContext.Provider>
      )
}

export {ScoreProvider, useScores}