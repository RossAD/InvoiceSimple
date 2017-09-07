import React, { Component } from 'react'

export default (props) => (
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Invoice App</a>
      </div>
      <ul className="nav navbar-nav">
        <li><a onClick={() => props.onClick('products')} href="#">Products</a></li>
        <li><a onClick={() => props.onClick('customers')} href="#">Customers</a></li>
        <li><a onClick={() => props.onClick('invoices')} href="#">Invoices</a></li>
      </ul>
    </div>
  </nav>
)
