import React, { useContext, useEffect } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'))
    if (storedEmployees && JSON.stringify(storedEmployees) !== JSON.stringify(userData)) {
      setUserData(storedEmployees)
    }
  }, [userData, setUserData])

  const renderTask = (task, id) => {
    if (task.active) return <AcceptTask data={task} key={id} />
    if (task.newTask) return <NewTask data={task} key={id} />
    if (task.completed) return <CompleteTask data={task} key={id} />
    if (task.failed) return <FailedTask data={task} key={id} />
    return null
  }

  return (
    <div className='bg-[#1e1e1e] p-6 rounded-xl shadow-md shadow-black/10 mt-6'>
      <h2 className='text-2xl font-bold text-white mb-8 border-b-2 border-gray-600 pb-2'>Task List</h2>
      <div id='tasklist' className='flex items-center gap-6 overflow-x-auto pb-4'>
        {data?.tasks?.map((task, id) => renderTask(task, id))}
      </div>
    </div>
  )
}

export default TaskList