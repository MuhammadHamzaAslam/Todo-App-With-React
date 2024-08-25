import { useState } from 'react';
import Button from './Components/Button';
import './App.css';

function App() {
  let [todo, setTodo] = useState('');
  let [allTodo, setAllTodo] = useState([]);

  const addTodo = () => {
    if (!todo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Plz Add Todo",
      });
    }
    else {
      const newTodo = {
        id: Date.now(),
        text: todo
      };
      setAllTodo([...allTodo, newTodo]);
      setTodo('');
    }
  };

  const deleteTodo = (id) => {
    const filteringTodo = allTodo.filter(data => data.id !== id);
    setAllTodo(filteringTodo);
  };

  const editTodo = (id) => {
    const todoToEdit = allTodo.find(todo => todo.id === id);
    setTodo(todoToEdit.text);
    const remainingTodos = allTodo.filter(todo => todo.id !== id);
    setAllTodo(remainingTodos);
  };

  return (
    <>
      <h1 className='text-center text-4xl font-bold mt-6 text-gray-800'>
        Todo App With React
      </h1>
      <div className='flex justify-center items-center mt-8'>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder='Add Your Todo'
          className='border-2 border-gray-300 w-80 h-12 pl-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <Button
          text='Add'
          onClick={addTodo}
          bgColor='bg-blue-500'
          className='ml-4 h-12 px-6 text-white rounded-lg shadow-sm'
        />
      </div>
      <div className='flex justify-center mt-10'>
        <div className='border-2 overflow-y-scroll border-gray-300 h-[60vh] w-[500px] flex flex-col p-4 rounded-lg shadow-lg bg-white'>
          {
            allTodo.map((todo) => (
              <div key={todo.id} className='flex justify-between items-center bg-gray-100 p-2 mt-2 rounded-lg shadow-sm'>
                <h1 className='font-bold text-lg text-gray-800'>{todo.text}</h1>
                <div className='flex space-x-2'>
                  <Button
                    text='Edit'
                    bgColor='bg-green-500'
                    onClick={() => editTodo(todo.id)}
                    className='text-white h-8 px-4 rounded-lg shadow-sm'
                  />
                  <Button
                    text='Delete'
                    bgColor='bg-red-500'
                    onClick={() => deleteTodo(todo.id)}
                    className='text-white h-8 px-4 rounded-lg shadow-sm'
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
