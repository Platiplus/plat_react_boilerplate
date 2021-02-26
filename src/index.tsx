import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

import Routes from './routes'
import GlobalStyles from 'styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
    <h1>OI</h1>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
