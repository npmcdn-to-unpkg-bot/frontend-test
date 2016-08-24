import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

export default class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, onIncrement} = this.props
    return (
      <p>
        Clicked: {value} times
        <button onClick={onIncrement}>+</button>
      </p>
    )
  }
}
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
}

const store = createStore(
  function (state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 5
      default:
        return state
    }
  }
)

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState() }
      onIncrement={() => store.dispatch({ type: 'INCREMENT' }) }
      />,
    document.getElementById('content')
  )
}

render()
store.subscribe(render)
