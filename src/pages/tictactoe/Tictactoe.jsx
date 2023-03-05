import { Sidebar } from "../../component";

export const Tictactoe = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
          Let's play
          <span className="font-bold text-4xl p-2 text-blue-400">tic-tac-toe!</span>
        </div>

        <div className="installation-info flex-1 flex flex-col items-center bg-slate-200 rounded-md p-10 mx-5">
          <h1 className="text-4xl  font-bold">Pick your choice!</h1>
          <div className="criss-cross flex p-5">
            <button><a href="/tttgame"><div className="cross text-8xl p-5 cursor-pointer hover:text-blue-400 hover:scale-125">X</div></a></button>
            <div className="separation text-8xl p-5">|</div>
            <button><div className="circle text-8xl p-5 cursor-pointer hover:text-blue-400 hover:scale-125">O</div></button>
          </div>
        </div>
      </div>
    </div>
  );
};
