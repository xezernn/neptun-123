import React from "react";

function Loading() {
  return (
    <div className="h-full flex flex-col items-center justify-center w-full lgx:w-[200px] m-8 rounded shadow-lg animate-pulse">
      <div className="h-48 w-full rounded-t dark:bg-gray-400"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-200">
        <div className="w-full h-6 rounded dark:bg-gray-600"></div>
        <div className="w-full h-6 rounded dark:bg-gray-600"></div>
        <div className="w-3/4 h-6 rounded dark:bg-gray-600"></div>
      </div>
    </div>
  );
}

export default Loading;
