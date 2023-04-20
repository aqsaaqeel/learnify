import { Sidebar } from "../../component";
import { Link, useParams } from "react-router-dom";
import { LevelThreeC, LevelThreeJS, LevelThreeJava,  LevelThreePython, LevelThreeCpp} from "../../contents/level3";
export const Lvl3 = () => {
  let component;
  const { language } = useParams();
  console.log(language);
  if (language === "javascript") {
    component = <LevelThreeJS />;
  } else if (language === "python") {
    component = <LevelThreePython />;
  } else if (language === "cpp") {
    component = <LevelThreeCpp />;
  } else if (language === "c") {
    component = <LevelThreeC />;
  } else if (language === "java") {
    component = <LevelThreeJava />;
  }
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="headings flex items-center justify-between">
          <div className="row-span-1 welcome-text text-3xl flex p-5 items-center">
            <span className="font-bold text-4xl p-2">Level 3:</span> {language}
          </div>
          <Link to={`/progress/${language}/lvl3/lightsout`}>
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
