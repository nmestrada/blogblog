import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './client/redux/store'
import Root from './client/components/Root'
import './style.css';



ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('app')
  )
