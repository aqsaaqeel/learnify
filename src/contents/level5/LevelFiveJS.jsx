export const LevelFiveJS = () => {
  const explicitSnippet = `const obj = {
  name: 'John',
  age: 30,
  sayHi: function() {
    console.log('Hi, my name is ' + this.name);
  }
};

const greet = obj.sayHi.bind(obj);
greet();`;

  const implicitSnippet = `const obj = {
  name: 'John',
  age: 30,
  sayHi: function() {
    console.log('Hi, my name is ' + this.name);
  }
};

obj.sayHi();`;

  const iifeSnippet = `(function() {
  const name = 'John';
  console.log('My name is ' + name);
})();`;

  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">
        Explicit and Implicit Binding in JavaScript
      </h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        In JavaScript, there are two ways to bind the "this" keyword to an object: explicit binding and implicit binding. Here are some examples:
      </p>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          Explicit binding involves using the "call" or "apply" method to specify the object that "this" should refer to. For example:
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{explicitSnippet}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(explicitSnippet)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
          Implicit binding involves using the object that the method is called on as the context for "this". For example:
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{implicitSnippet}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(implicitSnippet)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
          Immediately invoked function expressions (IIFE) are a way to create a new scope in JavaScript and prevent variables from polluting the global namespace. For example:
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{iifeSnippet}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(iifeSnippet)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
      </ol>
    </div>
  );
};
