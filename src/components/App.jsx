import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar onClick={(path) => alert(`Show ${path}`)} />

        <div className="container">
          Implement me
        </div>
      </div>
    )
  }
}
