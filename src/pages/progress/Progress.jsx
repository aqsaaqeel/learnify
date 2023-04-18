import { useParams } from "react-router-dom";
import { Sidebar } from "../../component";
import { JsInst, PyInst, CppInst, JavaInst, CInst } from "../../contents";
// import { Lvcpp1, Lvlpy1 } from "../../pages";
export const Progress = () => {
  const { language } = useParams();
  let component;
  // let level;
  if (language === "javascript") {
    component = <JsInst />;
    // level = "lvl1";
  } else if (language === "python") {
    component = <PyInst />;
    // level = "lvlpy";
  } else if (language === "cpp") {
    component = <CppInst />;
    // level = "lvlcpp";
  } else if (language === "c") {
    component = <CInst />;
    // level = "lvlc";
  } else if (language === "java") {
    component = <JavaInst />;
    // level = "lvljava";
  }
  console.log("hi");
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
          <span className="font-bold text-4xl p-2">
            Your {language} progress,
          </span>{" "}
          student!
        </div>
        <div className="row-span-9 subheading text-center flex flex-wrap gap-10 justify-center p-10">
          {language === "javascript" ? (
            <a href={`/progress/${language}/lvl1`}>
              <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
                Level 1
              </div>
            </a>
          ) : (
            <a href={`/progress/${language}/lvl1`}>
              <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
                Level 1
              </div>
            </a>
          )}
          <a href={`/progress/${language}/lvl2`}>
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 2
            </div>
          </a>
          <a href={`/progress/${language}/lvl3`}>
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 3
            </div>
          </a>
          <a href={`/progress/${language}/lvl1`}>
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 4
            </div>
          </a>
          <a href={`/progress/${language}/lvl1`}>
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 5
            </div>
          </a>
        </div>
        {component}
      </div>
    </div>
  );
};
