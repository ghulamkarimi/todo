import { useContext } from "react"
import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { AppContext } from "../AppContext"

const TaskItem: React.FC = () => {

    const { items, setItems, setTask, setIsButtonActive } = useContext(AppContext);

    const deleteTask = (idPerson: number) => {
        const newTask = items.filter((items) => items.id !== idPerson);
        setItems(newTask)
        setTask("")
    };
    const editBooleanTask = (idPerson: number) => {
        const index = items.findIndex((item) => item.id === idPerson);
        const newTask = [...items];
        newTask[index].done = !newTask[index].done;
        setItems(newTask);
        setTask(newTask[index].title);
        setIsButtonActive(false)
    };

    if (items) {
        return (
            <ul className=" flex flex-col gap-4 w-full bg-slate-300 justify-between items-center rounded-lg">
                {
                    items.map((item) => (
                        <li className={`w-full border-b last:border-b-0  flex justify-between py-2 px-4 ${item.done && " bg-slate-200 text-slate-700"}`} key={item.id}>
                            {`${item.title}`}


                            <div className="flex gap-2 items-center">

                                <AiOutlineEdit className="text-yellow-500 text-2xl cursor-pointer" onClick={() => { editBooleanTask(item.id) }} />

                                <BsTrash className="text-red-500 text-xl cursor-pointer" onClick={() => { deleteTask(item.id) }} />
                            </div>
                        </li>
                    ))}
            </ul>
        )
    } else {
        return
    }
}

export default TaskItem
