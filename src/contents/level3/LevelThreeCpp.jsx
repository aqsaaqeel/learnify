const codeSnippetifelse = `if (x > 10) { cout << "x is greater than 10"; } else if (x < 10) { cout << "x is less than 10"; } else { cout << "x is equal to 10"; };   `;
const codeSnippetternaryoperator = `int x = 10; int y = 20; int max = (x > y) ? x : y`

export const LevelThreeCpp = () => {
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
        In C++, a variable is a named storage location in memory that holds a
        value of a specific data type. Like C, a variable in C++ has a data type
        that determines the type of data that can be stored in it, and the value
        stored in a variable can be changed during the execution of the program.
        C++ also supports pointers, which are variables that store memory
        addresses.{" "}
        <span className="text-blue-600 font-bold">
          To declare a variable in C++, you specify its type and name. C++ also
          supports reference variables, which are variables that refer to other
          variables.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          In C++, variables must be declared with a data type before they can be
          used.
        </li>
        <li className="p-5">
          The data type determines the range of values that the variable can
          store and the operations that can be performed on it.
        </li>
        <li className="p-5">
          Variables can be initialized with a value when they are declared or at
          a later point in the program. If a variable is not initialized, its
          initial value is undefined.
        </li>
        <li className="p-5">
          The scope of a variable in C++ is the part of the program where the
          variable can be accessed. Variables declared inside a block of code
          have block scope, while variables declared outside of any block of
          code have global scope.
        </li>
        <li className="p-5">
          The lifetime of a variable in C++ is the period of time during which
          the variable exists in memory. Automatic variables are created when a
          block of code is entered and destroyed when the block of code is
          exited, while dynamically allocated variables exist until they are
          explicitly deallocated.
        </li>
        <li className="p-5">
          Reference variables in C++ are aliases for other variables. They are
          declared with the & symbol and allow multiple names to refer to the
          same value in memory.
        </li>
        <li className="p-5">
          Pointer variables in C++ store memory addresses instead of values.
          They are declared with the * symbol and can be used to access the
          value stored at a particular memory address.
        </li>
        <li className="p-5">
          Constants in C++ are variables that cannot be modified once they have
          been initialized. They are declared with the const keyword and are
          often used to define values that are used throughout a program.
        </li>
        <li className="p-5">
          C++ has several storage classes that determine the lifetime and
          visibility of a variable, including auto, static, register, and
          extern.
        </li>
        <li className="p-5">
          Typecasting is the process of converting a variable from one data type
          to another. This can be done explicitly with the use of casting
          operators, such as (int) or (float).
        </li>
        <li>
          To declare a variable in C++, you specify its type and name. You can
          also initialize a variable at the same time you declare it, like this:
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
          C++ allows you to organize your code using namespaces, which provide a
          way to group related variables and functions together. Namespaces can
          help prevent naming conflicts and make your code more modular and
          maintainable.
        </li>
      </ol>
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
  );
};
