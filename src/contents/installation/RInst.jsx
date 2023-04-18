export const RInst = () => {
  return (
    <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
      <h1 className="text-4xl">About</h1>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        C is a general-purpose programming language that was developed in the
        early 1970s by Dennis Ritchie at Bell Labs. It is a low-level language
        that provides low-level access to computer memory and hardware, which
        makes it a popular choice for system programming, embedded systems, and
        operating system development. C is a compiled language, which means that
        source code written in C must be compiled into executable code before it
        can be run on a computer.{" "}
        <span className="text-blue-600 font-bold">
          Clicking on any level will take you to a module where you can learn
          few concepts. And then based on the concepts learnt, you can play a
          game to reinforce the learning.
        </span>
      </p>
      <h2 className="text-2xl">Steps to installation</h2>
      <p className="inline-block font-thin text-left items-start justify-start py-5">
        C is a programming language, and as such, it does not require
        installation in the same way that software applications do. However, to
        compile and run C programs, you need to set up a C development
        environment. Here are the steps to set up a basic C development
        environment on a Windows system:
      </p>
      <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
        <li>
          Download and install a C compiler, such as GCC, from a trusted source.
          One option is to download the MinGW-w64 installer, which includes the
          GCC compiler for Windows.
        </li>
        <li>
          Add the directory containing the C compiler to the system PATH
          environment variable. This will allow you to run the compiler from any
          directory on your computer.
        </li>
        <li>
          Open a text editor and write a simple C program, such as "Hello,
          World!" program.
        </li>
        <li>Save the program with a .c extension, such as "hello.c".</li>
        <li>
          Open a command prompt and navigate to the directory containing the C
          program using the "cd" command.
        </li>
        <li>
          Compile the program using the C compiler by typing "gcc hello.c -o
          hello.exe". This will create an executable file called "hello.exe" in
          the same directory as the source code.
        </li>
        <li>Run the program by typing "hello" on the command line.</li>
      </ol>
      <p>
        That's it! You have set up a basic C development environment and
        compiled and run your first C program. To further develop your C
        programming skills, you can explore additional libraries, frameworks,
        and development tools available for C.
      </p>
    </div>
  );
};
