import './App.css';
import Header from './Components/Header';
import FormAddTask from './Components/FormAddTask';
import Item from './Components/Item';
import { useState, useEffect } from 'react';

function App() {
  
  const [task,setTask]= useState(JSON.parse(localStorage.getItem("task"))||[]);
  const [title,setTitle] = useState("");
  const [editId,setEditId] = useState(null);
  const [theme,setTheme] = useState(JSON.parse(localStorage.getItem("theme"))||"light");

  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task))
  },[task])
  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme))
  },[theme])

  function saveTask(e) {
    e.preventDefault();
    if(!title) {
      alert("Please fill in the task");
    } else if(editId) {
      const updateTask = task.map((task)=>{
        if(task.id === editId) {
          task = {...task, title:title}
        } 
          return {...task}
      })
      setTask(updateTask);
      setEditId(null);
      setTitle("");
    }
    else {
      const existId = task.map(item => item.id);
      let missingId = 1;
      while (existId.includes(missingId)) {
        missingId++;
      }
      const newTask = {
        id:missingId,
        title:title
      }
      setTask([...task, newTask]);
      setTitle("");
    }
  };
  function editTask(id) {
    setEditId(id);
    const selectTask= task.find((task)=>task.id === id);
    setTitle(selectTask.title)
  };
  function deleteTask(id) {
    const result = task.filter(item=>item.id !==id);
    setTask(result);
  };

  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='container'>
        <h2>Task Manager App</h2>
        <FormAddTask title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {
            task.map((task)=>(
              <Item key={task.id} task={task} editTask={editTask} deleteTask={deleteTask}/>
            ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
