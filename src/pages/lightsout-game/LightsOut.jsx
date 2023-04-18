import { Sidebar } from "../../component";
import { Board } from "./Board";
export const LightsOut = () => {
  
  return (
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
            <Board />
        </div>
      </div>
    </div>
  );
};
