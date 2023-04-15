import { Sidebar } from "../../component";
export const Java = () => {
//   const codeSnippet = `<script src="main.js"></script>`;
//   const codeSnippet2 = `<script>
//   alert('Hello, world!');
// </script>
// `;

  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
          <span className="font-bold text-4xl p-2">
            Your Java progress,
          </span>{" "}
          student!
        </div>
        <div className="row-span-9 subheading text-center flex flex-wrap gap-10 justify-center p-10">
          <a href="/lvljava">
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
        
      </div>
    </div>
  );
};
