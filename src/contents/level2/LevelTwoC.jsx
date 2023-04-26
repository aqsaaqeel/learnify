const codeSnippet = `int nums[5] = {10, 20, 30, 40, 50}; 
float prices[3] = {10.99, 20.49, 30.79}; 
char initials[3] = {'J', 'D', 'S'};`;
export const LevelTwoC = () => {
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
        Arrays
      </h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        In C, an array is a collection of values of the same type, stored in
        contiguous memory locations. Each value in an array is called an
        element.{" "}
        <span className="text-blue-600 font-bold">
          To declare an array in C, you specify its type, name, and size in
          square brackets. You can also initialize an array at the same time you
          declare it.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about arrays</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          Arrays are used to store collections of values in C programs.
        </li>
        <li className="p-5">
          An array must be declared before it can be used. The declaration
          specifies the array's name, data type, and size.
        </li>
        <li className="p-5">
          The size of an array determines the number of elements it can hold.
        </li>
        <li className="p-5">
          In C, there are several data types available for arrays, including
          int, float, double, char, and more.
        </li>
        <li className="p-5">
          Elements in an array can be accessed using their index, which starts
          at 0.
        </li>
        <li className="p-5">
          In C, arrays can be passed as arguments to functions, returned from
          functions, and used in expressions.
        </li>
        <li className="p-5">
          Arrays in C are case sensitive. For Example, nums and Nums are two
          different arrays.
        </li>
        <li className="p-5">
          Arrays in C have a scope, which determines where in the program the
          array can be used. This scope can be local, function or global.
        </li>
        <li className="p-5">
          Arrays in C can be initialized with values when they are declared.
          like this,
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
      </ol>
    </div>
  );
};
