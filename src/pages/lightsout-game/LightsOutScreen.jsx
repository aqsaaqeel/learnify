import { Link, useParams } from "react-router-dom";
import { Sidebar } from "../../component";
import { Board } from "./Board";
export const LightsOut = () => {
  const {language} = useParams();
  return (
    <div className="flex flex-col">
      <div className="flex h-screen">
        <div className="flex-none bg-gray-200 w-1/6">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col gap-5 p-8">
          <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
            Let's play
            <span className="font-bold text-4xl p-2 text-blue-400">
              Lights Out 💡
            </span>
          </div>

          <div className="installation-info flex justify-center bg-slate-200 rounded-md p-10 mx-5 h-auto">
            <Board size={5} />
          </div>
          <Link to={`/progress/${language}/lvl4`}>
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Let's go to next level
          </button>
        </Link>
        </div>
        
      </div>
     
    </div>
  );
};
