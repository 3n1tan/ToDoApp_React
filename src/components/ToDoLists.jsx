import React from 'react'

const ToDoLists = ({lists, onDelete}) => {
    if(lists.length === 0) return null;
  return (
    <div>
        <h1>ToDo Lists</h1>
        <ol>
            {lists.map(list=> <li key={list.id}>
                {list.description}
            <button onClick={()=> onDelete(list.id)}>Delete</button>
            </li>)}
        </ol>

    </div>
  )
}

export default ToDoLists