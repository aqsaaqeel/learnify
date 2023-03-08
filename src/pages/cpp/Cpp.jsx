import { Sidebar } from "../../component";
export const Cpp = () => {
  const codeSnippet = `<script src="main.js"></script>`;
  const codeSnippet2 = `<script>
  alert('Hello, world!');
</script>
`;
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
          <span className="font-bold text-4xl p-2">
            Your Cpp progress,
          </span>{" "}
          student!
        </div>
        <div className="row-span-9 subheading text-center flex flex-wrap gap-10 justify-center p-10">
          <a href="/lvlcpp">
            <div className="language cursor-pointer hover:scale-125 bg-blue-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 1
            </div>
          </a>
          <a href="/">
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 2
            </div>
          </a>
          <a href="/">
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 3
            </div>
          </a>
          <a href="/">
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 4
            </div>
          </a>
          <a href="/">
            <div className="language cursor-pointer hover:scale-125 bg-slate-400 w-48 h-24 flex justify-center items-center rounded-lg text-zinc-100">
              Level 5
            </div>
          </a>
        </div>
        <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
          <h1 className="text-4xl">About</h1>
          <p className="inline-block font-thin text-left items-start justify-start py-5">
          C++ is a high-level programming language used for developing software and computer applications. C++ is an extension of the C programming language, and it is known for its flexibility, speed, and performance. It is used in a wide range of applications, including operating systems, video games, web browsers, and database software.{" "}
            <span className="text-blue-600 font-bold">
              Clicking on any level will take you to a module where you can
              learn few concepts. And then based on the concepts learnt, you can
              play a game to reinforce the learning.
            </span>
          </p>
          <h2 className="text-2xl">Steps to installation</h2>
          <p className="inline-block font-thin text-left items-start justify-start py-5">
          Here are the general steps to install a C++ compiler on a Windows operating system:</p>
          <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
            <li>
            Download an Integrated Development Environment (IDE) that supports C++. Some popular IDEs for C++ include Visual Studio Code, Code::Blocks, Eclipse, and NetBeans. You can download the IDE of your choice from their respective websites.
            </li>
            <li>
            Install the C++ compiler. Most IDEs come bundled with a C++ compiler, but you may need to download and install it separately. Some popular C++ compilers include GCC, Clang, and Microsoft Visual C++. You can download the compiler of your choice from their respective websites.
            </li>
            <li>
            Install any necessary libraries. Depending on the project you want to work on, you may need to install additional libraries. You can usually find information about any necessary libraries in the project documentation.
            </li>
            <li>
            Set up your development environment. Once you have installed your IDE, C++ compiler, and any necessary libraries, you will need to configure your development environment. This may involve setting environment variables, adding include directories, or configuring build settings.
            </li>
            <li>
            Test your installation. Once you have set up your development environment, you should test that everything is working correctly by creating a simple "Hello, World!" program and compiling and running it.
            </li>
            
          </ol>
          <p>These steps may vary slightly depending on the operating system you are using and the specific tools you choose to install, but they should give you a general idea of the process involved in installing a C++ compiler.</p>
        </div>
      </div>
    </div>
  );
};
