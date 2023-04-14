import { Sidebar } from "../../component";
import { Link } from "react-router-dom";
export const Lvl1 = () => {
  const codeSnippet = 
    `let x = 10;  const y = "hello";`;
  return (
    <div className="flex h-screen">
      <div className="flex-none bg-gray-200 w-1/6">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col gap-5 p-8">
        <div className="headings flex items-center justify-between">
            <div className="row-span-1 welcome-text text-3xl flex p-5 items-center">
            <span className="font-bold text-4xl p-2">Level 1:</span> JavaScript
            </div>
            <Link to="/tttgame"><button className="px-10 py-4 bg-blue-500 text-zinc-50 m-5 rounded-md ">Start Game</button></Link>
        </div>
        <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
          <h1 className="text-4xl">What are variables?</h1>
          <p className="inline-block font-thin text-left items-start justify-start py-5">
            In JavaScript, variables are used to store data values. A variable
            is simply a name that represents a value.{" "}
            <span className="text-blue-600 font-bold">
              Before you can use a variable in JavaScript, you must declare it.
              You declare a variable by using the "var" keyword followed by the
              variable name.
            </span>
          </p>
          <h2 className="text-2xl">Important things to know about variables</h2>
          <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
            <li className="p-5">
              A variable is a container for storing data values in JavaScript.
            </li>
            <li className="p-5">
              Variables can be declared using the "let", "const", or "var"
              keywords.
            </li>
            <li className="p-5">
              Variables declared with "let" and "const" are block-scoped,
              meaning they are only accessible within the block of code where
              they are declared.
            </li>
            <li className="p-5">
              Variables declared with "var" are function-scoped, meaning they
              are accessible within the entire function where they are declared.
            </li>
            <li className="p-5">
              The "let" keyword is used to declare variables that can be
              reassigned a new value, while the "const" keyword is used to
              declare variables whose value cannot be reassigned.
            </li>
            <li className="p-5">
              Variables can be initialized with a value at the time of
              declaration, like this:
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
            <li className="p-5">
              JavaScript variables can hold different types of data, including
              numbers, strings, Booleans, objects, and arrays.
            </li>
            <li className="p-5">
              Variables that are not initialized at the time of declaration are
              assigned the value "undefined" by default.
            </li>

            <li className="p-5">
              It is best practice to declare variables before using them to
              avoid unintentional global variables, which can cause unexpected
              behavior in your code.
            </li>
            <li className="p-5">
              JavaScript variables are dynamically typed, meaning that their
              data type can change during runtime based on the value they hold.
            </li>
            <li className="p-5">
              Global variables are accessible from anywhere in the code, which
              can make them prone to causing issues like naming conflicts and
              unintended side effects.
            </li>
            <li className="p-5">
              It is recommended to use "const" whenever possible to prevent
              accidental reassignment of variables and to promote code clarity
              and predictability
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
