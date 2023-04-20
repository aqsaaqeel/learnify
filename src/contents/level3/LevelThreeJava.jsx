const codeSnippet = `int age = 25;
float height = 1.75f;
char initial = 'J';
   `;
export const LevelThreeJava = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are variables?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        In Java, a variable is a named storage location that holds a value of a
        specific data type. Like C and C++, a variable in Java has a data type
        that determines the type of data that can be stored in it, and the value
        stored in a variable can be changed during the execution of the program.{" "}
        <span className="text-blue-600 font-bold">
          In Java, variables are strongly typed, meaning that each variable has
          a specific data type that determines what kind of data can be stored
          in it. Java also supports reference variables, which are variables
          that refer to objects in memory.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          Java has a wide range of built-in data types, including integers,
          floating-point numbers, characters, and boolean values. It also allows
          you to define custom data types using classes and interfaces.
        </li>
        <li className="p-5">
          Variables in Java must be declared before they can be used, and you
          can also initialize them at the same time you declare them. If a
          variable is not initialized, it will contain a default value depending
          on its data type.
        </li>
        <li className="p-5">
          The scope of a variable in Java is determined by where it is declared
          in the program. Variables declared inside a block of code are only
          visible inside that block, while variables declared outside of any
          block (class level variables) are visible to the entire class.
        </li>
        <li className="p-5">
          Java allows you to declare variables as final using the final keyword.
          Once a variable is declared as `final`, its value cannot be changed.
        </li>
        <li className="p-5">
          Java allows you to declare class-level variables as `static` using the
          static keyword. Static variables belong to the class rather than any
          instance of the class, and they can be accessed using the class name.
        </li>
        <li className="p-5">
          Java also allows you to declare constants using the `final` keyword. A
          constant is a variable whose value cannot be changed after it is
          initialized.
        </li>
        <li className="p-5">
          Java allows you to convert a variable from one data type to another
          using typecasting. Typecasting can be used to convert between built-in
          data types, as well as to convert between custom data types.
        </li>
        <li className="p-5">
          Java supports arrays, which are collections of variables of the same
          data type. Arrays are declared using square brackets.
        </li>
        <li className="p-5">
          In Java, reference variables are variables that refer to objects in
          memory. Reference variables are declared using the class name, and
          they can be used to access the properties and methods of the object
          they refer to.
        </li>
        <li className="p-5">
          To declare a variable in Java, you specify its type and name. You can
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
          In Java, variables that refer to objects are automatically managed by
          the garbage collector, which frees up memory used by objects that are
          no longer needed. This means that Java programmers do not need to
          worry about manually freeing memory, as they would in C or C++.
        </li>
      </ol>
    </div>
  );
};
