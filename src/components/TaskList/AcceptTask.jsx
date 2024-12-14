import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { updateTaskStatus } from "./taskMain";
import { showSuccessToast, showFailureToast } from "../../utils/toastConfig";

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleStatusChange = (status) => {
    const updatedData = updateTaskStatus(userData, data, status);
    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));

    if (status === "completed") {
      showSuccessToast("Task completed successfully! 🎉");
    } else {
      showFailureToast("Task marked as failed");
    }
  };

  return (
    <div className="flex-shrink-0 h-full w-[400px] p-6 bg-gray-500 text-white rounded-xl shadow-lg">
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
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleStatusChange("completed")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Mark as Completed
        </button>
        <button
          onClick={() => handleStatusChange("failed")}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
