import "./item.css"
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
export default function Item(props) {
    const {task,editTask,deleteTask} = props;
    return(
        <div className="task-item">
            <p className="task-title">{task.title}</p>
            <div className="btn-container">
                <button className="btn-edit" onClick={()=>editTask(task.id)}><BsPencilFill /> Edit</button>
                <button className="btn-delete" onClick={()=>deleteTask(task.id)}><BsFillTrashFill /> Delete</button>
            </div>
        </div>
    )
}