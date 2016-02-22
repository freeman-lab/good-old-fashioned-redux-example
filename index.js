var DOM = require('react-dom')
var createStore = require('redux').createStore
var counter = require('./components/counter')
var reducer = require('./reducers/index')

var store = createStore(reducer)
var root = document.getElementById('root')

function increment () {
  store.dispatch({ type: 'INCREMENT' })
}

function decrement () {
  store.dispatch({ type: 'DECREMENT' })
}

function render () {
  DOM.render(counter({
    increment: increment,
    decrement: decrement,
    value: store.getState()
  }), root)
}

render()
store.subscribe(render)
