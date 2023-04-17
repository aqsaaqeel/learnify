import { Sidebar } from "../../component";
import { Link } from "react-router-dom";
// import { LevelOneJS, LevelOneJava, LevelOnePython, LevelOneC, LevelOneCpp } from "../../contents/level1";
export const Lvl3 = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="headings flex items-center justify-between">
          <div className="row-span-1 welcome-text text-3xl flex p-5 items-center">
            <span className="font-bold text-4xl p-2">Level 3:</span>
          </div>
          <Link to="/">
            <button className="px-10 py-4 bg-blue-500 text-zinc-50 m-5 rounded-md ">
              Start Game
            </button>
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-5 p-8">
          <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
            Let's play
            <span className="font-bold text-4xl p-2 text-blue-400">
              memory game {`;)`}
            </span>
          </div>
          <div className="installation-info flex justify-center bg-slate-200 rounded-md p-10 mx-5 h-auto">
            <div className="card-container grid grid-rows-4 grid-cols-4 gap-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
