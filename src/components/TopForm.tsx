import React, { useContext } from "react"
import TaskItem from "./TaskItem"
import { AppContext } from "../AppContext"


const TopForm = () => {
  const { items, setItems, task, setTask,} = useContext(AppContext);
  const getTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }
  const sendItems = () => {
    if (task !== "") {
      setItems([...items, { id: Math.floor(Math.random() * 1000) + 1, title: task, done: false }]);
      setTask("");
    } else
      return;
  }

  return (
    <div className="bg-slate-400 flex justify-center items-center gap-6 flex-col p-12 rounded-xl w-full">
      <h1 className="text-3xl text-orange-700" >Todo</h1>
      <div className="rounded-xl flex  bg-slate-300">
        <input className=" bg-slate-300 rounded-lg px-4 py-2 outline-none w-full" type="text" placeholder="schreib hier..."
          value={task}
          onChange={getTask} />
        <button className="px-2 border-l-2 border-gray-500 bg-yellow-500 flex items-center cursor-pointer " onClick={sendItems}>hinzufügen</button>
      </div>
      <TaskItem />
    </div>

  )
}

export default TopForm
