const codeSnippetif = `int x = 10;
if (x > 5) {
   System.out.println("x is greater than 5");
}
`;

const codeSnippetifelse = `int age = 18;

if (age >= 18) {
  System.out.println("You are an adult");
} else {
  System.out.println("You are not an adult yet");
} `;

const codeSnippetternory = `int x = 5;
int y = 10;
int result = (x > y) ? x : y; `;

const codeSnippetswitch = `int day = 2;
switch (day) {
   case 1:
      System.out.println("Monday");
      break;
   case 2:
      System.out.println("Tuesday");
      break;
   case 3:
      System.out.println("Wednesday");
      break;
   default:
      System.out.println("Invalid day");
}`;

export const LevelThreeJava = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">Conditional Statements</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In Java, a conditional statement is a programming construct that allows a program to execute different sets of statements based on the evaluation of a Boolean expression.
      {" "}
        <span className="text-blue-600 font-bold">
        In Java, there are several types of conditional statements, including if, if-else, if-else-if, switch, and ternary operator.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about Conditional Statements</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        The if statement is used to execute a block of code only when a certain condition is true.
        </li>
        <li className="p-5">
        If the condition in the parentheses is true, the code inside the curly braces will be executed. If the condition is false, the code inside the curly braces will be skipped.
        </li>
        <li className="p-5">
          Here's an example of if statement.
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
        In this example, the code inside the curly braces will be executed because the value of x is greater than 5.
        </li>
        <li className="p-5">
        The if-else statement is used to execute one block of code if a certain condition is true, and another block of code if the condition is false.
        </li>
        <li className="p-5">
        If the condition in the parentheses is true, the code inside the first set of curly braces will be executed.
        If the condition is false, the code inside the second set of curly braces will be executed.
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
        In this example, the code inside the second set of curly braces will be executed because the value of x is less than or equal to 5.
        </li>
        <li className="p-5">
        The switch statement is used to execute different blocks of code based on the value of a variable.
        </li>
        <li  className="p-5">
        The switch statement evaluates the value of the variable and executes the code inside the case block that matches the value. If no case matches the value, the code inside the default block will be executed.
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{codeSnippetswitch}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(codeSnippetswitch)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
        In this example, the code inside the second case block will be executed because the value of the day variable is 2, so the output will be "Tuesday". If the value of day was not 1, 2, or 3, the code inside the default block would be executed and the output would be "Invalid day".
        </li>
        <li className="p-5">
        the ternary operator (also known as the conditional operator) is a shorthand way of writing an if-else statement. It takes three operands: a Boolean expression, a value for the true case, and a value for the false case.
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{codeSnippetternory}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(codeSnippetternory)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
        Here, the condition x is greater tha y evaluates to false since x is not greater than y. Therefore, the expression returns the value y, which is assigned to the variable result
        </li>
      </ol>
    </div>
  );
};
