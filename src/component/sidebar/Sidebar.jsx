export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-300">
        <span className="text-xl font-bold">Where to go?</span>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        <ul className="flex flex-col space-y-2">
          <li className="py-2">
            <a
              href="#!"
              className="text-gray-600 hover:text-gray-700 font-medium transition duration-150 ease-in-out"
            >
              Dashboard
            </a>
          </li>
          <li className="py-2">
            <a
              href="#!"
              className="text-gray-600 hover:text-gray-700 font-medium transition duration-150 ease-in-out"
            >
              Categories
            </a>
          </li>
          <li className="py-2">
            <a
              href="#!"
              className="text-gray-600 hover:text-gray-700 font-medium transition duration-150 ease-in-out"
            >
              In Progress
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
