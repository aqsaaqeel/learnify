const codeSnippetforloop = `for (int i = 0; i < 10; i++) {
  printf("The value of i is %d\n", i);
}`;

const codeSnippetwhileloop = `int i = 0;
while (i < 10) {
  printf("The value of i is %d\n", i);
  i++;
}`;

const codeSnippetdowhileloop = `
   int i = 1;
   do {
      printf("%d ", i);
      i++;
   } while (i <= 10);

}`;


export const LevelFourCpp = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">Loops</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In C++ programming, loops are used to execute a block of code repeatedly until a certain condition is met.It is same like C..{" "}
        <span className="text-blue-600 font-bold">
          There are three types of loops in C: for loop, while loop and do-while loop.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about Loops</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        The for loop is used when you know the number of times you want to execute a block of code.
        </li>
        <li className="p-5">
        The initialization part initializes the loop counter, the condition part sets the condition for the loop to continue, and the increment/decrement part updates the loop counter after each iteration.
        </li>
        <li className="p-5">
        Here's an example of a for loop that prints the numbers 1 to 10:
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
        The while loop is used when you want to execute a block of code as long as a certain condition is true.
        </li>
        <li className="p-5">
        The condition part sets the condition for the loop to continue, and the loop will keep executing the code as long as the condition is true.
        </li>
        <li className="p-5">
        Here's an example of a while loop that prints the numbers 1 to 10:
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
        The do-while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
        </li>
        <li className="p-5">
        The code inside the do block will always execute at least once, and then the condition is checked.
        </li>
        <li className="p-5">
        If the condition is true, the loop will continue to execute the code block.
        </li>
        <li className="p-5">
        Here's an example of a do-while loop that prints the numbers 1 to 10:
        </li>
      </ol>
      <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{codeSnippetdowhileloop}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(codeSnippetdowhileloop)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
          </div>
    </div>
  );
};
