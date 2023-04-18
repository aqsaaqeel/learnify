const codeSnippet = `x = 10;  y = "hello";`;
export const LevelTwoPython = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are variables?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        In Python, a variable is a named location in memory that stores a value.
        Variables are used to store data that can be manipulated or processed by
        a program.{" "}
        <span className="text-blue-600 font-bold">
          In Python, you do not need to explicitly declare a variable before
          using it. Instead, you simply assign a value to a variable using the
          "=" operator.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          Variables are named locations in memory that store data that can be
          manipulated or processed by a program.
        </li>
        <li className="p-5">
          In Python, you do not need to explicitly declare a variable before
          using it. Instead, you simply assign a value to a variable using the
          "=" operator.
        </li>
        <li className="p-5">
          Variables can hold a wide range of data types, such as numbers
          (integers, floats), strings, Boolean values, lists, tuples,
          dictionaries, and more.
        </li>
        <li className="p-5">
          The scope of a variable determines where it can be accessed within a
          program. In Python, the scope of a variable is determined by where it
          is defined.
        </li>
        <li className="p-5">
          Python is a dynamically typed language, which means that the data type
          of a variable is determined at runtime based on the value assigned to
          it.
        </li>
        <li className="p-5">
          Global variables are defined outside of functions and can be accessed
          from anywhere within the program. Local variables are defined within
          functions and can only be accessed within that function.
        </li>
        <li className="p-5">
          A variable's name should be descriptive and follow a naming
          convention, such as using lowercase letters and underscores to
          separate words.
        </li>
        <li className="p-5">
          Variables can be modified by assigning new values to them. The
          previous value of the variable is overwritten when a new value is
          assigned to it.
        </li>
        <li className="p-5">
          Variables can be used in a variety of contexts in Python, such as
          arithmetic operations, conditional statements, loops, and function
          calls.
        </li>
        <li className="p-5">
          Python has no command for declaring a variable. A variable is created
          the moment you first assign a value to it. like this,
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
          Understanding how to use variables is a fundamental aspect of
          programming and is essential for writing effective and efficient code.
        </li>
      </ol>
    </div>
  );
};
