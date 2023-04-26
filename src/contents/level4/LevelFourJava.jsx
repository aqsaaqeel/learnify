const codeSnippetforloop = `for (int i = 1; i <= 10; i++) {
  System.out.println(i);
};`;

const codeSnippetwhileloop = `int i = 1;
while (i <= 10) {
    System.out.println(i);
    i++;
}`;

const codeSnippetdowhileloop = `int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 10);`;

export const LevelFourJava = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are variables?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        In Java, In Java, loops are used to execute a block of code repeatedly as long as a certain condition is met.{" "}
        <span className="text-blue-600 font-bold">
        There are three types of loops in Java: for loop, while loop, and do-while loop.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        The for loop is used to execute a block of code a specific number of times. 
        </li>
        <li className="p-5">
        It consists of three parts: initialization, condition, and update. 
        </li>
        <li className="p-5">
        The initialization is executed only once, at the beginning of the loop.
        The condition is checked before each iteration of the loop, and if it evaluates to true, the block of code inside the loop is executed. The update is executed at the end of each iteration.
        </li>
        <li className="p-5">
        For example, the following code prints the numbers from 1 to 10:
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
          The while loop is used to execute a block of code repeatedly as long as a certain condition is true. 
        </li>
        <li className="p-5">
          The condition is checked before each iteration of the loop, and if it evaluates to true, the block of code inside the loop is executed.
        </li>
        <li className="p-5">
        For example, the following code prints the numbers from 1 to 10:
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
        The do-while loop is similar to the while loop, but the block of code inside the loop is executed at least once, even if the condition is false.
        </li>
        <li className="p-5">
        The condition is checked at the end of each iteration, and if it evaluates to true, the block of code inside the loop is executed again.
        </li>
        <li className="p-5">
        For example, the following code prints the numbers from 1 to 10:
        </li>
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
        <li>
        In summary, loops are essential in Java programming as they provide a way to execute a block of code repeatedly until a certain condition is met. The three types of loops in Java are for loop, while loop, and do-while loop, and each has its own syntax and use cases.
        </li>
      </ol>
    </div>
  );
};
