var react = require('react')
var DOM = react.DOM

var counter = react.createClass({
  incrementIfOdd: function () {
    if (this.props.value % 2 !== 0) {
      this.props.increment()
    }
  },

  incrementAsync: function () {
    setTimeout(this.props.increment, 1000)
  },

  render: function () {
    return DOM.div(
      null,
      this.props.value,
      ' ',
      DOM.button({onClick: this.props.increment}, '+'),
      DOM.button({onClick: this.props.decrement}, '-'),
      DOM.button({onClick: this.incrementIfOdd}, 'if odd'),
      DOM.button({onClick: this.incrementAsync}, 'async')
    )
  }
})

module.exports = react.createFactory(counter)
