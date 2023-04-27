const codeSnippet = `birthYear = 1995`;

export const LevelOneBasic = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are variables?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In programming, a variable is a way to store a piece of information that can be used and modified later on. 
      Think of it as a labeled container that can hold a value or a piece of data.
        <span className="text-blue-600 font-bold">
        Think of it as a labeled container that can hold a value or a piece of data.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        For example, let's say you're writing a program to calculate someone's age based on their birth year. You might create a variable called "birthYear" and assign it the value of the year the person was born:
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
        Variables can hold different types of data, such as numbers, strings (text), boolean values (true/false), and more. The type of data a variable can hold depends on the programming language you're using.
        </li>
        <li>
        It's important to give your variables meaningful names so you can easily remember what they're for. It's also important to remember that variables can be changed throughout the program, so their value is not always fixed.
        </li>
      </ol>
    </div>
  );
};
