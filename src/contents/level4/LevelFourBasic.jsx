const codeSnippetforloop = `
for i in range(5):
    print(i)
`;

const codeSnippetwhileloop = `
x = 0
while x < 5:
    print(x)
    x += 1
`

export const LevelOneBasic = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are Loops?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In programming, a loop is a way to repeat a set of instructions multiple times. 
        <span className="text-blue-600 font-bold">
        It allows you to automate repetitive tasks and perform operations on large amounts of data.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about Loops</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        There are two main types of loops: "for" loops and "while" loops.
        </li>
        <li className="p-5">
        A "for" loop is used when you know in advance how many times you want to repeat a set of instructions. 
        </li>
        <li className="p-5">
            Here's an Example
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{codeSnippetforloop}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(codeSnippetforloop)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
        In this example, we're using a "for" loop to print the values of the variable "i" from 0 to 4. The range() function generates a sequence of numbers from 0 to 4 (inclusive), and the "for" loop iterates over each value in the sequence and executes the block of code that prints the value of "i". After the loop has executed five times (once for each value in the sequence), the program moves on to the next line.
        </li>
        <li className="p-5"> 
        A "while" loop, on the other hand, is used when you want to repeat a set of instructions until a certain condition is met.
        </li>
        <li className="p-5">
            Here's an example:
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{codeSnippetwhileloop}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(codeSnippetwhileloop)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
        In this example, we're using a "while" loop to print the values of the variable "x" from 0 to 4. The loop continues to execute as long as the value of "x" is less than 5. Each time the loop iterates, the block of code that prints the value of "x" is executed, and the value of "x" is incremented by 1 using the shorthand operator "+=". Once the value of "x" is equal to 5 (i.e., once the condition in the while statement is false), the loop is exited and the program moves on to the next line.
        </li>
        <li>
        Both "for" and "while" loops are powerful tools in programming, and they allow you to perform complex operations on large amounts of data. It's important to use them carefully and test your code thoroughly to make sure that your loops behave as expected in all possible scenarios.
        </li>
      </ol>
    </div>
  );
};
