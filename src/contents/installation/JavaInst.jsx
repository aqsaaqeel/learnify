export const JavaInst = () => {
    return (
        <div className="installation-info flex-1 flex flex-col items-start font-bold bg-slate-200 rounded-md p-10 mx-5 h-auto">
          <h1 className="text-4xl">About</h1>
          <p className="inline-block font-thin text-left items-start justify-start py-5">
          Java is a high-level, general-purpose programming language that is designed to be platform-independent, which means that Java code can be run on any platform that supports Java, without needing to be recompiled.
          Java has a vast standard library, which includes classes and methods that provide common functionality, such as input/output, networking, and database access.{" "}
            <span className="text-blue-600 font-bold">
              Clicking on any level will take you to a module where you can
              learn few concepts. And then based on the concepts learnt, you can
              play a game to reinforce the learning.
            </span>
          </p>
          <h2 className="text-2xl">Steps to installation</h2>
          <p className="inline-block font-thin text-left items-start justify-start py-5">
          Here are the general steps to install Java on a Windows operating system:</p>
          <ol className="inline-block font-thin text-left items-start justify-start py-1 list-decimal">
            <li>
            Go to the official Java website (<a  className="text-black-500 font-bold" href ="https://www.java.com/en/">https://www.java.com/en/</a>) and click on the "Free Java Download" button.
            </li>
            <li>
            On the next page, click on the "Agree and Start Free Download" button to begin the download.
            </li>
            <li>
            Once the download is complete, double-click on the downloaded file to start the installation process.
            </li>
            <li>
            Follow the on-screen instructions to complete the installation. You may be asked to accept the license agreement, choose an installation directory, and customize the installation options.
            </li>
            <li>
            Once the installation is complete, you can verify that Java is installed correctly by opening a command prompt and typing "java -version". This should display the version of Java that is installed on your system.
            </li>  
          </ol>
          <p>These steps may vary slightly depending on the version of Java you are installing and the operating system you are using, but they should give you a general idea of the process involved in installing Java. Note that some IDEs, such as Eclipse or NetBeans, come with their own bundled version of Java, so you may not need to install Java separately if you are using one of these IDEs.</p>
        </div>
    )
}