export const LevelOneR = () => {
  const codeSnippet = `x <- 10
                        y <- 20.008
                        initial <- "J"`;
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are variables?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        In R, a variable is a named object that can store a value of a certain type. The value stored in a variable can be changed during the execution of the program.{" "}
        <span className="text-blue-600 font-bold">
          To create a variable in R, you use the assignment operator ${'<-'} or '='. You can also initialize a variable at the same time you create it.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          Variables are used to store values in R programs.
        </li>
        <li className="p-5">
          A variable must be created before it can be used. The creation specifies the variable's name and data type.
        </li>
        <li className="p-5">
          The data type of a variable determines the kind of values it can hold and the operations that can be performed on it.
        </li>
        <li className="p-5">
          In R, there are several data types available for variables, including numeric, integer, complex, logical, character, and more.
        </li>
        <li className="p-5">
          Variables can be assigned new values using the assignment operators ${'<-'} or '='.
        </li>
        <li className="p-5">
          In R, variables can be used in expressions and passed as arguments to functions.
        </li>
        <li className="p-5">
          Variables in R are case sensitive. For example, x and X are two different variables.
        </li>
        <li className="p-5">
          Variables in R have a scope, which determines where in the program variable can be used. This scope can be local or global.
        </li>
        <li className="p-5">
          Variables in R can be initialized with a value when they are created, like this:
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
          The lifetime of a variable in R depends on its scope. Local variables have a lifetime that corresponds to the duration of the block in which they are defined. Function parameters and local variables are automatically destroyed when the function returns. Global variables have a lifetime that corresponds to the duration of the program.
        </li>
      </ol>
    </div>
  );
};
