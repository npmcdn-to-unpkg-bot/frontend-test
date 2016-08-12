import React            from 'react'
import AddTodo          from '../containers/AddTodo'
import VisibleTodoList  from '../containers/VisibleTodoList'
import FilterLink       from '../containers/FilterLink'

export default function App () {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

function Footer () {
  return (
    <p>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  )
}
