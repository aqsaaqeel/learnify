const codeSnippetifelse = `if (x > 10) { printf("x is greater than 10"); } else if (x < 10) { printf("x is less than 10"); } else { printf("x is equal to 10"); }`;

const codeSnippetternaryoperator = `int x = 10;
int y = 20;
int max = (x > y) ? x : y`; 

export const LevelThreeC = () => {
  return (
  <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
  <iframe
       width="420"
       height="315"
       src=""
       className="p-5"
       title="js-arrays"
     ></iframe>
  <h1 className="text-4xl">
  Conditional Statements
  </h1>
  <p className="inline-block font-thin text-left items-start justify-start py-5">
    In C, conditional statements are used to control the flow of execution in a program based on certain conditions.{" "}
    <span className="text-blue-600 font-bold">
    The most common conditional statement in C is the "if-else" statement, which allows a program to execute one set of instructions if a condition is true and another set of instructions if the condition is false.
    </span>
    </p>
    <h2 className="text-2xl">Important things to know about conditional statements</h2>
    <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
    <li className="p-5">
    Conditional statements in C are used to control the flow of execution in a program based on certain conditions.
    </li>
    <li className="p-5">The most common conditional statement in C is the "if-else" statement.
    </li>
    <li className="p-5">
      In an "if-else" statement. if the condition inside the parantheses is true, the code inside the "if" block is executed, otherwise the code inside the "else" block is executed.
    </li>
    <li className="p-5">
    Multiple conditions can be checked using "else if" blocks.
    </li>
    <li className="p-5">
    In C, logical operators such as "&&" (and) and "||" (or) can be used to combine multiple conditions.
    </li>
    <li className="p-5">
    Conditional statements in C can be nested to check for multiple conditions.
    </li>
    <li className="p-5">
    Conditional statements in C can be used with any data type, including integers, floating-point numbers, characters, and more.
    </li>
    <li className="p-5">
    The code inside a conditional statement must be enclosed in curly braces.
    </li>
    <li className="p-5">
    Here is an example of an "if-else" statement in C:
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
    Ternary Operator is a shorthand conditional operator in many programming languages, including C. 
    </li>
    <li className="p-5">
    It allows you to write an if-else statement in a compact, single line of code.
    </li>
    <li className="p-5">
    The ternary operator has three parts:
    <ul>
      <li>A condition that evaluates to either true or false.</li>
      <li>An expression that gets evaluated if the condition is true.</li>
      <li>An expression that gets evaluated if the condition is false.</li>
    </ul>
    </li>
    <li className="p-5">
      Here's an example of using Ternary operator in C:
    </li>
    <div className="bg-gray-100 p-4 rounded-md my-7">
      <pre>
        <code className="text-sm font-mono">{codeSnippetternaryoperator}</code>
      </pre>
      <button
        onClick={() => navigator.clipboard.writeText(codeSnippetternaryoperator)}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Copy Code
      </button>
    </div>
    <li className="p-5">
    In this example, the condition expression one which is x greater than y is evaluated, which is false since x is not greater than y. Therefore, the second expression y is evaluated and its value is assigned to the variable max.
    </li>
  </ol>
</div>
)};
