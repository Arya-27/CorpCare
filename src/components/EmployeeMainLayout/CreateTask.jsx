import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const data = userData;
  
    // Check if data is an array
    if (Array.isArray(data)) {
      data.forEach(function (elem) {
        if (assignTo === elem.firstName) {
          elem.tasks.push(newTask);
          elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
        }
      });
      setUserData(data);
      console.log(data);
    } else {
      console.error("userData is not an array:", data);
    }
  
    setTaskTitle("");
    setCategory("");
    setAssignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="mt-5 max-h-[calc(100vh-100px)] overflow-y-auto bg-gray-900 shadow-lg rounded-lg p-5">
        <form onSubmit={(e) => {
              submitHandler(e)
        }} className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 p-2">
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2">Task Title</label>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                type="text"
                placeholder="Make a FullStack Project"
                className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2">Date</label>
              <input
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
                type="date"
                className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2">Assign To</label>
              <input
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
                type="text"
                placeholder="employee-name"
                className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2">Category</label>
              <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                type="text"
                placeholder="Design"
                className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <label className="block text-gray-300 font-bold mb-2">Description</label>
            <textarea
            value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
              cols="30"
              rows="10"
              className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter task description here..."
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-200">
              Create Task
            </button>
          </div>
        </form>
      </div>
  );
};

export default CreateTask;
