const codeSnippetif = `x = 10
if x > 5:
    print("x is greater than 5")
`;

const codeSnippetifelse = `x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")
`

export const LevelOneBasic = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are Conditional Statements?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In programming, a conditional statement is a way to make a decision in your code based on a condition or set of conditions. 
        <span className="text-blue-600 font-bold">
        It allows you to control the flow of your program by executing different blocks of code depending on whether the condition is true or false.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about Conditional Statements</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        For example, we've created a variable called "x" and assigned it the value of 10. We then use an if statement to check whether the value of "x" is greater than 5. If it is, we execute the block of code that prints the message "x is greater than 5". If the condition is false (i.e., if x is not greater than 5), then the block of code is skipped and the program moves on to the next line.
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
        You can also use an "else" statement to execute a different block of code if the condition is false:
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
        In this example, we've changed the value of "x" to 3. Since 3 is not greater than 5, the first block of code is skipped and the program moves on to the else statement. The second block of code is then executed, which prints the message "x is not greater than 5".
        </li>
        <li>
        Conditional statements are a powerful tool in programming, and they allow you to create programs that can make decisions and respond to different situations. It's important to use them carefully and test your code thoroughly to make sure that it behaves as expected in all possible scenarios. 
        </li>
      </ol>
    </div>
  );
};
