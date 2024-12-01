
import { Link, useParams } from "react-router-dom";
import { LevelFiveC, LevelFiveJS, LevelFiveJava,  LevelFivePython, LevelFiveCpp} from "../../contents/level5";
export const Lvl5 = () => {
  let component;
  const { language } = useParams();
  console.log(language);
  if (language === "javascript") {
    component = <LevelFiveJS />;
  } else if (language === "python") {
    component = <LevelFivePython />;
  } else if (language === "cpp") {
    component = <LevelFiveCpp />;
  } else if (language === "c") {
    component = <LevelFiveC />;
  } else if (language === "java") {
    component = <LevelFiveJava />;
  }
  return (
    <div className="flex h-screen">

      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="headings flex items-center justify-between">
          <div className="row-span-1 welcome-text text-3xl flex p-5 items-center">
            <span className="font-bold text-4xl p-2">Level 5:</span> {language}
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
