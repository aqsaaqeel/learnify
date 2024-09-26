const codeSnippetif = `x = 10
if x > 5:
    print("x is greater than 5")
;`;

const codeSnippetifelse = `x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")
`;

const codeSnippetelif = `x = 7

if x > 10:
    print("x is greater than 10")
elif x > 5:
    print("x is greater than 5 but less than or equal to 10")
else:
    print("x is less than or equal to 5")
`;

export const LevelThreePython = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <div className="flex justify-center pb-10">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/GX1uaYgmexg"
          title="js-level1"
        ></iframe>
      </div>
      <h1 className="text-4xl">What are variables?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In Python, conditional statements allow you to control the flow of your program based on certain conditions.{" "}
        <span className="text-blue-600 font-bold">
        The most common conditional statements in Python are the if, elif, and else statements.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about Conditional Statements</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        The if statement is used to execute a block of code only if a certain condition is true. 
        </li>
        <li className="p-5">
        In the example below, the code inside the if block will only be executed if the variable x is greater than 5:
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{codeSnippetif}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(codeSnippetif)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
        You can also use comparison operators and logical operators to create more complex conditions.
        </li>
        <li className="p-5">
        The if-else statement is used when you want to execute one block of code if a condition is true, and another block of code if the condition is false.
        </li>
        <li className="p-5">
        In the example below, the code inside the if block will be executed if the variable x is greater than 5, and the code inside the else block will be executed if x is less than or equal to 5:
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{codeSnippetifelse}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(codeSnippetifelse)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
        The if-elif-else statement is used when you have multiple conditions to check.
        </li>
        <li className="p-5">
        In the example below, the code inside the first if block will be executed if the variable x is greater than 10, the code inside the elif block will be executed if x is greater than 5 but less than or equal to 10, and the code inside the else block will be executed if x is less than or equal to 5:
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{codeSnippetelif}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(codeSnippetelif)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
        Conditional statements are essential for controlling the flow of your program and making it more dynamic and responsive to different situations.
        </li>
      </ol>
    </div>
  );
};
