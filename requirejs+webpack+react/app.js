const React = require('react')
const ReactDOM = require('react-dom')

const _ = require('_')
const toolss = require('toolss')
const moment = require('moment')

import List from './component/list'

console.log(_.extend)
console.log(toolss)
console.log(moment().format('YYYY-MM-DD'))

ReactDOM.render(
  <div>
    <h1>123</h1>
    <List />
  </div>
, document.querySelector('#root'))