const codeSnippetList = `lst = [10, 20, 30, 40, 50] floatList = [20.008, 30.5, 40.2] charList = ['J', 'o', 'h', 'n']`;

const codeSnippetDict = `dict = {'name': 'John', 'age': 25, 'city': 'New York'}`;

const codeSnippetTuple = `tup = (10, 20, 30, 'John')`;

export const LevelTwoPython = () => {
  return (
  <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
  <iframe
       width="420"
       height="315"
       src=""
       className="p-5"
       title="python-lists-dicts-tuples"
     ></iframe>
      <h1 className="text-4xl">Lists, Dictionaries, and Tuples</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
      In Python, there are three built-in data structures that are used to
      store collections of data - lists, dictionaries, and tuples. These data
      structures are used extensively in Python programs, and it is important
      to understand their features and how to use them effectively.
      <span className="text-blue-600 font-bold">
      To declare a list in Python, you can enclose a sequence of elements in
      square brackets. To declare a dictionary, you use curly braces and
      separate each key-value pair with a colon. To declare a tuple, you use
      parentheses.
      </span>
      </p>
      <h2 className="text-2xl">Important things to know about Lists</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
      <li className="p-5">
        Lists are used to store multiple values of the same or different types
        in Python programs.
      </li>
      <li className="p-5">
        A list must be declared before it can be used. The declaration
        specifies the sequence of elements the list contains.
      </li>
      <li className="p-5">
        The elements of a list can be accessed using an index. List indexes
        start from zero in Python.
      </li>
      <li className="p-5">
        In Python, you can also use negative indexing to access elements from
        the end of the list.
      </li>
      <li className="p-5">
        Lists can be initialized with a sequence of values enclosed in square
        brackets. For Example,
      </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
        <pre>
        <code className="text-sm font-mono">{codeSnippetList}</code>
        </pre>
        <button
        onClick={() => navigator.clipboard.writeText(codeSnippetList)}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        Copy Code
        </button>
        </div>
      <li>
        The size of a list in Python is not fixed and can be changed at
        runtime by adding or removing elements.
      </li>
      <li>
        Lists in Python can be passed as arguments to functions, returned from
        functions, and used in expressions.
      </li>
      <li className="p-5">
      A dictionary is a collection of key-value pairs, where each key is associated with a value. 
      It is also known as an associative array or hash map in other programming languages.
      </li>
      <li className="p-5">
      Here's an example of a dictionary in Python:
      </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
        <pre>
        <code className="text-sm font-mono">{codeSnippetDict}</code>
        </pre>
        <button
        onClick={() => navigator.clipboard.writeText(codeSnippetDict)}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        Copy Code
        </button>
        </div>
      <li className="p-5">
      A dictionary is created using curly braces {} and each key-value pair is separated by a colon :. 
      </li>
      <li className="p-5">The keys in a dictionary must be unique and immutable, such as strings or numbers, while the values can be of any data type.
      </li>
      <li className="p-5">
      Dictionaries are a useful data structure in Python, and they are commonly used for tasks such as counting occurrences of items or storing configuration settings.
      </li>
      <li className="p-5">
      In Python, a tuple is an ordered collection of elements, similar to a list.
      </li>
      <li className="p-5">
      However, unlike a list, a tuple is immutable, meaning that once it is created, its elements cannot be modified.
      </li>
      <li className="p-5">
      Tuples are defined by enclosing a comma-separated sequence of values in parentheses.
      </li>
      <li className="p-5">
      Here's an example of a tuple in Python:
      </li>
      <div className="bg-gray-100 p-4 rounded-md my-7">
        <pre>
        <code className="text-sm font-mono">{codeSnippetTuple}</code>
        </pre>
        <button
        onClick={() => navigator.clipboard.writeText(codeSnippetTuple)}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        Copy Code
        </button>
        </div>
        <li className="p-5">
        Tuples can contain elements of different data types, including numbers, strings, and other objects
        </li>
        <li className="p-5">
        Tuples are often used when you want to group related data together, but you don't want that data to be modified accidentally or intentionally.
        </li>
      </ol>
     </div>
     )}