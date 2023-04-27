const codeSnippetforloop = `fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit);`;


const codeSnippetwhileloop = `i = 0
while i < 5:
    print(i)
    i += 1
`;

export const LevelFourPython = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">Loops</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In Python, loops are used to repeat a block of code until a certain condition is met.{" "}
        <span className="text-blue-600 font-bold">
        There are two types of loops in Python: for loop and while loop..
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about Loops IN Python</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        The for loop is used to iterate over a sequence (such as a list, tuple, dictionary, or string) and execute a block of code for each item in the sequence.
        </li>
        <li className="p-5">
        For example, the following code uses a for loop to print each item in a list:
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
        Here, fruit is a new variable that takes on the value of each item in the fruits(list) in turn, and the indented block of code below the for statement is executed for each item in the fruits.
        </li>
        <li className="p-5">
          Output for the given code - apple banana cherry                                  
        </li>
        <li className="p-5">
        The while loop is used to execute a block of code repeatedly until a certain condition is met
        </li>
        <li className="p-5">
        The following code uses a while loop to print the numbers from 0 to 4:
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
        Here, i less than 5 is a Boolean expression that is checked at the beginning of each iteration of the loop. If the condition is True, the indented block of code below the while statement is executed; if the condition is False, the loop is exited and the program continues with the code that follows the while loop.
        </li>
        <li className="p-5">
          The output for the given code - 0 1 2 3 4
        </li>
      </ol>
    </div>
  );
};
