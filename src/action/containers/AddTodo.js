import React from 'react'
import { connect } from 'react-redux'

// action
let nextTodoId = 0
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">追加する</button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
