import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import Login from './Login'

const App = ({ match: { params } }) => {
  return (
    <div>
      {/* <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer /> */}
      <Login/>
    </div>
  )
}

export default App