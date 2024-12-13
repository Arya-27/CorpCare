import React from "react"
import Header from "../EmployeeMainLayout/Header"
import TaskNumber from "../EmployeeMainLayout/TaskNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = (props) =>{
    return (
        <div className="p-20 bg-[#1C1C1C] h-screen">
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskNumber data={props.data} />
        <TaskList data={props.data} />
        </div>
    )
}

export default EmployeeDashboard