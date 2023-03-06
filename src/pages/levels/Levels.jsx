export const Levels = (props) =>{
    return (
        <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="row-span-1 welcome-text text-3xl flex p-5 justify-center text-center items-center">
          <span className="font-bold text-4xl p-2">
            Your JavaScript progress,
          </span>{" "}
          student!
        </div>
        <div className="row-span-9 subheading text-center flex flex-wrap gap-10 justify-center p-10">
          <a href="/lvl1">
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
            JavaScript (JS) is a lightweight, interpreted, or just-in-time
            compiled programming language with first-class functions. While it
            is most well-known as the scripting language for Web pages, many
            non-browser environments also use it, such as Node.js, Apache
            CouchDB and Adobe Acrobat.{" "}
            <span className="text-blue-600 font-bold">
              Clicking on any level will take you to a module where you can
              learn few concepts. And then based on the concepts learnt, you can
              play a game to reinforce the learning.
            </span>
          </p>
          <h2 className="text-2xl">Steps to installation</h2>
          <p className="inline-block font-thin text-left items-start justify-start py-5">
            JavaScript is a programming language that runs in the web browser or
            on a server using Node.js. It is not installed separately, but
            rather you use it in conjunction with other software. Here are the
            general steps to use JavaScript:
          </p>
          <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
            <li>
              Open a text editor: To write JavaScript code, you need a text
              editor or an Integrated Development Environment (IDE). Some
              popular options include Visual Studio Code, Sublime Text, and
              Atom.
            </li>
            <li>
              Create an HTML file: JavaScript code is typically embedded within
              an HTML file. Create a new file and save it with a .html
              extension.
            </li>
            <li>
              Link the JavaScript file: To link your JavaScript code to your
              HTML file, you need to use a script tag with a src attribute that
              points to your JavaScript file. For example:
            </li>
            <div className="bg-gray-100 p-4 rounded-md my-7">
              <pre>
                <code className="text-sm font-mono">{codeSnippet}</code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(codeSnippet)}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Copy Code
              </button>
            </div>
            <li>
              Write JavaScript code: Inside the script tag, you can write
              JavaScript code. For example
            </li>
            <div className="bg-gray-100 p-4 rounded-md my-7">
              <pre>
                <code className="text-sm font-mono">{codeSnippet2}</code>
              </pre>
              <button
                onClick={() => navigator.clipboard.writeText(codeSnippet2)}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Copy Code
              </button>
            </div>
            <li>
              Test the code: Open your HTML file in a web browser to see the
              results of your JavaScript code.
            </li>
          </ol>
        </div>
      </div>
    </div>
    )
}