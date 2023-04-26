const codeSnippet = `int x = 10; float y = 20.008; 
char initial = 'J';`;
export const LevelOneC = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are variables?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        In C, a variable is a named memory location that is used to store a
        value of a certain type. The value stored in a variable can be changed
        during the execution of the program..{" "}
        <span className="text-blue-600 font-bold">
          To declare a variable in C, you specify its type and name. You can
          also initialize a variable at the same time you declare it.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          Variables are used to store values in C programs.
        </li>
        <li className="p-5">
          A variable must be declared before it can be used. The declaration
          specifies the variable's name and data type.
        </li>
        <li className="p-5">
          The data type of a variable determines the kind of values it can hold
          and the operations that can be performed on it.
        </li>
        <li className="p-5">
          In C, there are several data types available for variables, including
          int, float, double, char, and more.
        </li>
        <li className="p-5">
          Variables can be assigned new values using the assignment operators
          '='.
        </li>
        <li className="p-5">
          In C, variables can be passed as arguments to functions, returned from
          functions, and used in expressions.
        </li>
        <li className="p-5">
          Variables in C are case sensitive. For Example, x and X are two
          different variables.
        </li>
        <li className="p-5">
          Variables in C have a scope, which determines where in the program
          variable can be used. This scope can be local, function or global.
        </li>
        <li className="p-5">
          Variables in C can be initialized with a value when they are declared.
          like this,
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
          The lifetime of a variable in C depends on its scope. Local variables
          have a lifetime that corresponds to the duration of the block in which
          they are defined. Function parameters and local variables are
          automatically destroyed when the function returns. Global variables
          have a lifetime that corresponds to the duration of the program.
        </li>
      </ol>
    </div>
  );
};
