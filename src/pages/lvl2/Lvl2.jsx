import { Sidebar } from "../../component";
import { Link, useParams } from "react-router-dom";
import { LevelOneJava, LevelOnePython, LevelOneC, LevelOneCpp, LevelOneR } from "../../contents/level1";
import { LevelTwoJS } from "../../contents/level2";
export const Lvl2 = () => {
  let component;
  const { language } = useParams();
  console.log(language);
  if (language === "javascript") {
    component = <LevelTwoJS />;
  } else if (language === "python") {
    component = <LevelOnePython />;
  } else if (language === "cpp") {
    component = <LevelOneCpp />;
  } else if (language === "c") {
    component = <LevelOneC />;
  } else if (language === "java") {
    component = <LevelOneJava />;
  }
  else if (language === "r") {
    component = <LevelOneR />;
  }
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="headings flex items-center justify-between">
          <div className="row-span-1 welcome-text text-3xl flex p-5 items-center">
            <span className="font-bold text-4xl p-2">Level 2:</span> {language}
          </div>
          <Link to={`/progress/${language}/lvl2/memory-game`}>
            <button className="px-10 py-4 bg-blue-500 text-zinc-50 m-5 rounded-md ">
              Start Game
            </button>
          </Link>
        </div>
        {component}
      </div>
    </div>
  );
};
