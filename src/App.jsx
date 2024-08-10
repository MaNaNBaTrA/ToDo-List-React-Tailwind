import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Page from './assets/page.svg'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let String = localStorage.getItem("todos")

    if (String) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const savetodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const Edit = (e, id) => {
    e.preventDefault();
    let index = todos.findIndex(text => {
      return text.id === id
    })

    let edittodo = todos[index].todo
    setTodo(edittodo)

    let newTodos = todos.filter(text => {
      return text.id !== id
    });
    setTodos(newTodos)
    savetodo()

  }

  const Add = () => {
    if (todo.length >= 5) {

      setTodos([...todos, { id: uuidv4(), todo, Done: false }])
      setTodo("")
    }
    else {
      alert("Minimum 5 Letters Required!")
    }
    savetodo()
    console.log(todos)
  }

  const Check = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(text => {
      return text.id === id
    })
    let newtodos = [...todos]
    newtodos[index].Done = !newtodos[index].Done
    setTodos(newtodos)
    savetodo()

  }

  const Delete = (e, id) => {
    let newtodos = todos.filter(text => {
      return text.id !== id
    })
    setTodos(newtodos)
    savetodo()
  }

  const Change = (e) => {
    setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-10 mb-2 py-5'>
        <div className='text-4xl font-semibold flex text-nowrap gap-3'>To Do List
          <img src={Page} alt="Error" className='w-12 h-12' />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <input type="text" name="" placeholder='Add new task' className='w-1/3 h-10 p-3 rounded-2xl  flex items-center '
          onChange={Change} value={todo} />
        <div className='w-14 bg-orange-600 flex h-10 rounded-2xl items-center justify-center text-white cursor-pointer font-medium' onClick={Add}>Add</div>
      </div>

      <div className="section flex justify-center items-center my-5">
        <div className='bg-white h-3/4 w-[74vh] justify-center rounded-2xl px-4 py-8 '>
          {todos.length === 0 && <div className='font-semibold'>No Todos To Display</div>}
          {todos.map(text => {
            return (
              <div key={text.id} className="task flex bg-primary w-full rounded-2xl items-center justify-between px-4 my-3">
                <input type="checkbox" id="" className="checkbox mr-auto m-2 rounded-2xl " checked={text.Done} name={text.id} onChange={Check} />
                <div className={text.Done ? "line-through text m-3 text-wrap" : " text m-3 text-wrap"}>{text.todo}</div>
                <div className="right flex space-x-4 ml-auto">
                  <div className="edit m-1 cursor-pointer" onClick={(e) => { Edit(e, text.id) }}><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#000000", }} /></div>
                  <div className="delete m-1 cursor-pointer" onClick={(e) => { Delete(e, text.id) }}><FontAwesomeIcon icon={faTrashCan} style={{ color: "#000000", }} /></div>
                </div>
              </div>
            )

          })}
        </div>
      </div>


    </>

  )
}

export default App
