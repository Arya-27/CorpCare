import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[400px] p-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-yellow-400 text-xs text-black px-3 py-1 rounded-full font-bold uppercase">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-80 italic">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-bold tracking-wide border-b-2 border-yellow-400 pb-2">
        {data.taskTitle}
      </h2>
      <p className="text-sm mt-3 leading-relaxed opacity-90">
        {data.taskDescription}
      </p>
      <div className="mt-4">
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300">
          Task Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;

