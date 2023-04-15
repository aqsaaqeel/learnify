import { Sidebar } from "../../component";
import { Link, useParams } from "react-router-dom";
import { LevelOneJS, LevelOneJava, LevelOnePython, LevelOneC, LevelOneCpp } from "../../contents/level1";
export const Lvl1 = () => {
  let component;
  const { language } = useParams();
  console.log(language);
  if (language === "javascript") {
    component = <LevelOneJS />;
  } else if (language === "python") {
    component = <LevelOnePython />;
    // level = "lvlpy";
  } else if (language === "cpp") {
    component = <LevelOneCpp />;
    // level = "lvlcpp";
  } else if (language === "c") {
    component = <LevelOneC />;
    // level = "lvlc";
  } else if (language === "java") {
    component = <LevelOneJava />;
    // level = "lvljava";
  }
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="headings flex items-center justify-between">
          <div className="row-span-1 welcome-text text-3xl flex p-5 items-center">
            <span className="font-bold text-4xl p-2">Level 1:</span> {language}
          </div>
          <Link to="/tttgame">
            <button className="px-10 py-4 bg-blue-500 text-zinc-50 m-5 rounded-md ">
              Start Game
            </button>
          </Link>
        </div>
        {component ? component : <p>No content available.</p>}
      </div>
    </div>
  );
};
