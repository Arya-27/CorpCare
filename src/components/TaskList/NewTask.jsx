import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { updateTaskStatus } from "./taskMain";
import { showSuccessToast } from "../../utils/toastConfig";

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleAcceptTask = () => {
    const updatedData = updateTaskStatus(userData, data, "active");
    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));
    showSuccessToast("Task accepted successfully!");
  };

  return (
    <div className="flex-shrink-0 h-full w-[400px] p-6 bg-yellow-200 text-black rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-600 text-xs text-white px-3 py-1 rounded-full font-bold uppercase">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-80 italic">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-bold tracking-wide border-b-2 border-blue-600 pb-2">
        {data.taskTitle}
      </h2>
      <p className="text-sm mt-3 leading-relaxed opacity-90">
        {data.taskDescription}
      </p>
      <div className="mt-4">
        <button
          onClick={handleAcceptTask}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
