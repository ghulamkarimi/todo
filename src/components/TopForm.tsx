import React, { useContext } from "react"
import TaskItem from "./TaskItem"
import { AppContext } from "../AppContext"


const TopForm = () => {
  const { items, setItems, task, setTask, position, setPosition, setIsButtonActive, idPerson } = useContext(AppContext);
  const getTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }
  const handlerActionButton = () => {
    if (position === "hinzufugen") {
      if (task !== "") {
        setItems([...items, { id: new Date().toISOString(), title: task, done: false }]);
        setTask("");
      } else
        return;
    }
    else {
      const index = items.findIndex((item) => item.id === idPerson);
      const newTask = [...items];
      newTask[index].title = task
      setItems(newTask);
      setTask("");
      setIsButtonActive(false)
      setPosition("hinzufugen")
    }
  }


  return (
    <div className="bg-slate-400 flex justify-center items-center gap-6 flex-col p-12 rounded-xl w-full">
      <h1 className="text-3xl text-orange-700" >Todo</h1>
      <div className="rounded-xl flex  bg-slate-300">
        <input className=" bg-slate-300 rounded-lg px-4 py-2 outline-none w-full" type="text" placeholder="schreib hier..."
          value={task}
          onChange={getTask} />
        <button className="px-2 border-l-2 border-gray-500 bg-yellow-500 flex items-center cursor-pointer " onClick={handlerActionButton}>{position}</button>
      </div>
      <TaskItem />
    </div>

  )
}

export default TopForm
