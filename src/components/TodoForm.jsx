import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers'



const TodoForm = () => {
    const {register, reset, handleSubmit} = useForm();
  return (
    <form action="">
        <input type="text" placeholder='Add task lists here' className='p-2.5 w-[300px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        <button className='bg-blue-500 hover:bg-blue-700 my-[4rem] font-bold py-2 px-2 text rounded-lg text-white sm:mt-[60px]'>Add task</button>
    </form>
  )
}

export default TodoForm