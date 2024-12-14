import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[400px] p-6 bg-red-200 text-black rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-xs text-white px-3 py-1 rounded-full font-bold uppercase">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-80 italic">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-bold tracking-wide border-b-2 border-red-600 pb-2">
        {data.taskTitle}
      </h2>
      <p className="text-sm mt-3 leading-relaxed opacity-90">
        {data.taskDescription}
      </p>
      <div className="mt-4">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
          Task Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
