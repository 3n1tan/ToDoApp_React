import React from 'react'

const ToDoLists = ({lists, onDelete}) => {
    if(lists.length === 0) return null;

  return (
    <div>
        <h1>ToDo Lists</h1>
        <ul>
            {lists.map(list=> <li key={index}>
                {list.description}
            </li>)}
            <button onClick={()=> onDelete(index)}>Delete</button>
        </ul>

    </div>
  )
}

export default ToDoLists