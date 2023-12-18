import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const[isCompleteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos,seTodos] = useState([]);
  const [newTitle,setNewTitle] =useState('');
  const [newDescription,setNewDescription] = useState('');


  const handleAddTodo = () => {
    let newTodoItem = {
      title:newTitle,
      description:newDescription,
    };
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    seTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  };
  const handleDeleteTodo = (index)=>{
    let reducedTodo =[...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todolist',JSON.stringify(reducedTodo));
    seTodos(reducedTodo)
  };
  useEffect(()=>{
    let savedTodo =JSON.parse(localStorage.getItem('todolist'))
    if(savedTodo){
      seTodos(savedTodo);
    }
  },[])

 
    return (
    <>
      <div className="App">
        <h1>TODOlist</h1>

        <div className='todo-wrapper'>
          <div className='todo-input'>
            <div className='todo-input-item'>
              <label>Title</label>
              <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder='write your tasks'/>
            </div>
            <div className='todo-input-item'>
              <label>Description</label>
              <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='what the task description?'/>
            </div>
            <div className='todo-input-item'>
              <button type='button' onClick={handleAddTodo} className='primaryBtn' > Add </button>
              <button type='button' onClick={()=>handleDeleteTodo(index)} className='primaryBtn1'>Delete</button>
            </div>
          </div>
          <div className='btn-area'>
            <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} 
            onClick={()=>setIsCompleteScreen(false)}
            >
              Todo
            </button>
            <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`}
             onClick={()=>setIsCompleteScreen(true)}
             >
              completed
              </button>
          </div>
           <div className='todo-list'>
            {allTodos.map((item,index)=>{
              return(
                <div className='todo-list-item' key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
       
      </div>
     
    </>
  )
}

export default App
