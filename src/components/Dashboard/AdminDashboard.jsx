import React from "react";
import Header from "../EmployeeMainLayout/Header";
import CreateTask from "../EmployeeMainLayout/CreateTask";
import AllTask from "../EmployeeMainLayout/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10 bg-gradient-to-r from-gray-800 to-gray-900 overflow-y-auto">
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;