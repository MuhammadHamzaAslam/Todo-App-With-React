import { useState } from 'react';
import Button from './Components/button';
import './App.css';

function App() {
  let [todo, setTodo] = useState('');
  let [allTodo, setAllTodo] = useState([]);

  const addTodo = () => {
    console.log('Todo Added', todo);
    setAllTodo([...allTodo, todo]); 
    setTodo(''); 
  };

  return (
    <>
      <h1 className='text-center text-4xl font-bold mt-6'>Todo App With React</h1>
      <div className='flex justify-center items-center mt-8'>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder='Add Your Todo'
          className='border-2 border-gray-600 w-60 h-12 pl-4 rounded-lg'
        />
        <Button onClick={addTodo} />
      </div>
      <div className='flex justify-center '>
        <div className='border-2 border-black h-[60vh] w-[400px] flex flex-col justify-center mt-5'>
          {allTodo.map((data, ind) => (
            <div key={ind} className='flex justify-between bg-gray-200 mt-3 w-[100%]'>
              <h1 className='my-auto ms-2 font-bold text-xl'>{data}</h1>
              <Button text='Delete' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
