const codeSnippet = `int arr[5] = {10, 20, 30, 40, 50}; 
float floatArr[3] = {20.008, 30.5, 40.2}; 
char charArr[4] = {'J', 'o', 'h', 'n'};`;
export const LevelTwoCPlusPlus = () => {
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
        In C++, an array is a collection of elements of the same type, stored
        in a contiguous memory location. The size and type of the array are
        fixed at compile time.{" "}
        <span className="text-blue-600 font-bold">
          To declare an array in C++, you specify the type of elements it
          contains and the number of elements it can hold. You can also
          initialize an array with a list of values enclosed in braces.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about arrays</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          Arrays are used to store multiple values of the same type in C++
          programs.
        </li>
        <li className="p-5">
          An array must be declared before it can be used. The declaration
          specifies the type of elements the array contains and the number of
          elements it can hold.
        </li>
        <li className="p-5">
          The elements of an array can be accessed using an index. Array indexes
          start from zero in C++.
        </li>
        <li className="p-5">
          In C++, there are several types of arrays available, including
          arrays of integers, floating-point numbers, characters, and more.
        </li>
        <li className="p-5">
          Arrays can be initialized with a list of values enclosed in braces.
          For Example,
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
          The size of an array in C++ is fixed at compile time and cannot be
          changed at runtime.
        </li>
        <li className="p-5">
          Arrays in C++ can be passed as arguments to functions, returned from
          functions, and used in expressions.
        </li>
        <li className="p-5">
          C++ provides several functions to work with arrays, such as the size
          function to get the number of elements in an array and the sort
          function to sort the elements of an array.
        </li>
      </ol>
    </div>
  );
};
