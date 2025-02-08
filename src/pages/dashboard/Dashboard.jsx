// import { Sidebar } from "../../component";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <div className="flex h-screen">

      <div className="flex-1 flex flex-col gap-5 p-5">
        <div className="row-span-1 welcome-text text-3xl flex p-5 items-center">
          <span className="font-bold text-4xl p-1">Hi,</span> Kaushik!
        </div>
        <div className="row-span-9 subheading text-center flex flex-wrap gap-10 justify-center p-10">
        <Link to="/progress/javascript">
            <div>Javascript</div>
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              <img
                src="https://i.ibb.co/p420x8r/javascript-logo.jpg"
                alt="javascript-logo"
                border="0"
                className="w-10"
              />
            </div>
          </Link>
          <Link to="/progress/c">
            <div>C</div>
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              <img
                src="https://i.ibb.co/7JKWmq9/c-logo.jpg"
                alt="c-logo"
                border="0"
                width="auto"
                className="w-10"
              />
            </div>
          </Link>
          {/* <Link to="/progress/cpp">
            <div>C++</div>
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              <img
                src="https://i.ibb.co/xMRrGW6/cpp-logo.jpg"
                alt="cpp-logo"
                border="0"
                className="w-10"
              />
            </div>
          </Link> */}
          <Link to="/progress/java">
            <div>Java</div>
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              <img
                src="https://i.ibb.co/9TXCQxg/java-logo.png"
                alt="java-logo"
                border="0"
                className="w-10"
              />
            </div>
          </Link>
          <Link to="/progress/python">
            <div>Python</div>
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              <img
                src="https://i.ibb.co/8xtwhwq/python-logo.jpg"
                alt="python-logo"
                border="0"
                className="w-10"
              />
            </div>
          </Link>
          
          {/* <Link to="/progress/r">
            <div>R</div>
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              <div>C</div>
              <img
                src="https://i.ibb.co/NVVTK6V/r-logo.jpg"
                alt="r-logo"
                border="0"
                className="w-10"
              />
            </div>
          </Link> */}
        </div>
        <div className="font-medium">
          Confused which language to pick? Read this blog to get some clarity{" "}
          <a
            href="https://smartbear.com/blog/best-programming-language-to-learn-first/"
            className="text-blue-600 cursor-pointer underline"
          >
            Best language for beginner.
          </a>
        </div>
        <div className="hidden sm:flex justify-center">
          <iframe
            src="https://embed.lottiefiles.com/animation/92377"
            title="newtitle"
            style={{
              width: "100%",
              height: "40rem",
              display: "flex",
              justifyContent: "center",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
