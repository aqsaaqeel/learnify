const codeSnippet = `numbers = [3, 7, 12, 9, 5]`;

export const LevelTwoBasic = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What is Array?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In programming, an array is a data structure that allows you to store a collection of values under a single variable name.
        <span className="text-blue-600 font-bold">
        The values are stored in a contiguous (i.e., side-by-side) block of memory, and each value is accessed using an index number.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
        For example, let's say you're writing a program to store a list of numbers. Instead of creating a separate variable for each number, you can create an array that can hold multiple numbers at once:
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
        In this example, we've created an array called "numbers" that contains five values: 3, 7, 12, 9, and 5. The values are separated by commas and enclosed in square brackets.
        </li>
       <li className="p-5">
        <ul>
            <li>
            One-dimensional arrays: These are the most basic type of array, and they store values in a single row or column. The example above is a one-dimensional array.
            </li>
            <li>
            Multi-dimensional arrays: These are arrays that store values in two or more dimensions, such as rows and columns. For example, a two-dimensional array might be used to store the values of a grid, where each cell contains a value.  
            </li>
            <li>
            Associative arrays: Also known as maps, dictionaries, or hash tables, associative arrays store key-value pairs, where each value is associated with a unique key. For example, you might use an associative array to store the names and ages of a group of people, where each name is a key and each age is a value.
            </li>
            <li>
            Dynamic arrays: These are arrays that can grow or shrink in size as needed. In some programming languages, you can create a dynamic array by simply omitting the size when you declare the array. In other languages, you may need to use special functions or methods to resize the array.
            </li>
        </ul>
       </li>
       <li>
       Arrays are a powerful tool in programming, and they can be used to store and manipulate large amounts of data efficiently. However, it's important to be careful when working with arrays, as errors such as index out of bounds errors can occur if you try to access an index that doesn't exist or assign a value to an index that is out of range.
       </li>
      </ol>
    </div>
  );
};
