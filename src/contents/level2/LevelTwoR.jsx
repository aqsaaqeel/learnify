import React from "react";

const codeSnippet = `
age <- 25
height <- 1.75
initial <- 'J'
`;

export const LevelTwoR = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">What are variables in R?</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        In R, a variable is a named storage location that holds a value of a
        specific data type. R is a dynamically-typed language, meaning that you
        do not need to specify the data type of a variable when declaring it.{" "}
        <span className="text-blue-600 font-bold">
          In R, variables are loosely typed, meaning that the same variable can
          hold values of different types at different points in time.
        </span>
      </p>
      <h2 className="text-2xl">Important things to know about variables</h2>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li className="p-5">
          R has a wide range of built-in data types, including numeric values,
          character strings, logical (boolean) values, and more. R also allows
          you to define custom data types using lists, arrays, and data frames.
        </li>
        <li className="p-5">
          Variables in R can be assigned using the assignment operator ${`<-`} or
          the equals sign `=`. If a variable is not assigned a value, it will
          be `NULL` by default.
        </li>
        <li className="p-5">
          The scope of a variable in R is determined by where it is assigned in
          the program. Variables assigned inside a function are local to that
          function, while variables assigned outside of any function (global
          variables) are visible throughout the entire program.
        </li>
        <li className="p-5">
          R allows you to declare constants using the `const` or `readonly`
          keyword. A constant is a variable whose value cannot be changed after
          it is assigned.
        </li>
        <li className="p-5">
          R supports vectors, which are collections of variables of the same
          data type. Vectors are created using the `c()` or `vector()` function.
        </li>
        <li className="p-5">
          R also supports lists, arrays, and data frames, which are more
          complex data structures that can hold variables of different data
          types.
        </li>
        <li className="p-5">
          R does not have the concept of reference variables like Java, as it
          does not use pointers or memory addresses to store data. Instead, R
          uses copy-on-modify semantics, where changes to a variable create a
          new copy of the variable.
        </li>
        <li className="p-5">
          To declare a variable in R, you simply assign a value to it using the
          assignment operator ${`<-`} or the equals sign `=`, like this:
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
  )
          };
