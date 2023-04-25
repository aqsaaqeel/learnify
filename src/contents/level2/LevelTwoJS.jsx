export const LevelTwoJS = () => {
  const loopSnippet = `for (let i = 0; i < 10; i++) {
  console.log(i);
}`;

  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <iframe
        width="420"
        height="315"
        src="https://youtu.be/XSl9ueOzecw"
        className="p-5"
        title="js-variables"
      ></iframe>
      <h1 className="text-4xl">
        JavaScript Loops, Currying, Promises, and More
      </h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        JavaScript has a number of powerful features that make it a versatile
        and popular language for web development. Here are some important
        concepts to know:
      </p>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          JavaScript has several types of loops, including the "for" loop, which
          allows you to iterate over a range of values, like this:
        </li>
        <div className="bg-gray-100 p-4 rounded-md my-7">
          <pre>
            <code className="text-sm font-mono">{loopSnippet}</code>
          </pre>
          <button
            onClick={() => navigator.clipboard.writeText(loopSnippet)}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy Code
          </button>
        </div>
        <li className="p-5">
          Currying is a technique in functional programming that involves
          breaking down a function with multiple arguments into a series of
          functions that each take one argument.
        </li>
        <li className="p-5">
          Promises are a way to handle asynchronous code in JavaScript, allowing
          you to execute code when an asynchronous operation is complete, like
          fetching data from an API.
        </li>
        <li className="p-5">
          JavaScript also has the concept of closures, which allow you to create
          functions that can access variables in their surrounding lexical
          scope, even after that scope has been exited.
        </li>
        <li className="p-5">
          The "this" keyword in JavaScript can be a bit tricky to understand, as
          its value can change depending on how a function is called. It's
          important to know how "this" works in order to write effective code in
          JavaScript.
        </li>
        <li className="p-5">
          JavaScript also has the concept of hoisting, which means that variable
          and function declarations are moved to the top of their scope during
          the compilation phase, regardless of where they are defined in the
          code.
        </li>
        <li className="p-5">
          JavaScript has several built-in methods for working with arrays,
          including "map", "filter", and "reduce", which allow you to perform
          common operations on arrays with ease.
        </li>
        <li className="p-5">
          Asynchronous JavaScript can be tricky to work with, but it's an
          important concept to understand if you want to build powerful,
          responsive web applications. Promises and async/await syntax can make
          it easier to work with asynchronous code in JavaScript.
        </li>
        <li className="p-5">
          JavaScript is a dynamically typed language, which means that variables
          can hold different types of data during runtime. This can be both a
          strength and a weakness of the language, depending on how you use it.
        </li>
        <li className="p-5">
          Finally, it's important to keep up with updates and changes in the
          language, as JavaScript is constantly evolving and improving." It's
          crucial for developers to stay up-to-date with new features and best
          practices to ensure their code remains efficient, secure, and
          compatible with the latest web technologies.
        </li>
      </ol>
    </div>
  );
};
