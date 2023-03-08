import { Sidebar } from "../../component";
export const Python = () => {
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
            Your Python progress,
          </span>{" "}
          student!
        </div>
        <div className="row-span-9 subheading text-center flex flex-wrap gap-10 justify-center p-10">
          <a href="/lvlpy">
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
          Python is a high-level, interpreted programming language that was first released in 1991.
           It is designed to be easy to read and write, and it has a simple syntax that makes it accessible to beginners.
           Python is widely used in a variety of fields such as data science, web development, scientific computing, artificial intelligence, and automation.{" "}
            <span className="text-blue-600 font-bold">
              Clicking on any level will take you to a module where you can
              learn few concepts. And then based on the concepts learnt, you can
              play a game to reinforce the learning.
            </span>
          </p>
          <h2 className="text-2xl">Steps to installation</h2>
          <p className="inline-block font-thin text-left items-start justify-start py-5">
          Python's extensive standard library and vast collection of third-party libraries make it a powerful and efficient tool for a wide range of applications.
          Here are the steps to install Python on your computer:
          </p>
          <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
            <li>
            Go to the official Python website at <a className="text-black-500 font-bold" href = "https://www.python.org/downloads/" >https://www.python.org/downloads</a>.
            </li>
            <li>
            Scroll down to find the latest stable release of Python and click on the
             "Download" button next to it. Choose the appropriate version for your operating system (Windows, macOS, or Linux).
            </li>
            <li>
            Once the download is complete, open the downloaded file and run the installer.
            </li>
            <li>
            During the installation process, select the "Add Python to PATH" option to make Python easily accessible from the command line.
            </li>
            <li>
            Choose the destination folder where you want to install Python. The default location is usually fine.
            </li>
            <li>
            Select the components you want to install. Unless you have a specific reason to do otherwise, it is recommended to install all the components.
            </li>
            <li>
            Wait for the installation to complete
            </li>
            <li>
            Once the installation is complete, open a command prompt (on Windows) or a terminal (on macOS or Linux) and type "python --version" to verify that Python is installed correctly. The version number should be displayed.  
            </li>
          </ol>
          <p>That's it! You have successfully installed Python on your computer</p>
        </div>
      </div>
    </div>
  );
};
