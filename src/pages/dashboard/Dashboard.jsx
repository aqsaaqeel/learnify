import { Sidebar } from "../../component";

export const Dashboard = () => {
    return (
      <div className="flex h-screen">
        <div className="flex-none bg-gray-200 w-1/6">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col gap-5 p-5">
          <div className="row-span-1 welcome-text text-3xl flex p-5 items-center">
            <span className="font-bold text-4xl p-1">Welcome,</span> student!
          </div>
          <div className="row-span-1 text-2xl subheading text-center">Pick a language</div>
          <div className="row-span-9 subheading text-center flex flex-wrap gap-10 justify-center p-10">
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">JavaScript</div>
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">Python</div>
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">C</div>
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">HTML</div>
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">CSS</div>
          </div>
        </div>
      </div>
    );
  };
  
