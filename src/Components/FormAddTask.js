import "./FormAddTask.css";
import { BsPlusLg } from "react-icons/bs";
export default function FormAddTask(props) {
  const {title, setTitle, saveTask, editId} = props;
  return(
    <div>
      <form onSubmit={saveTask}>
        <div className="form-control">
          <input type="text" name="title" className="text-input"  value={title} onChange={(e)=>setTitle(e.target.value)}></input>
          <button type="submit" className="btn btn-add"><BsPlusLg /> {editId?"Update":"Add"}</button>
        </div>
      </form>
    </div>
  );
}