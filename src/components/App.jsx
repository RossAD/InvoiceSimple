import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { fetchInvoices } from '../actions/invoiceActions.js'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchInvoices())
  }

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

const mapPropsToState = state => {
  const { invoices } = state
  return invoices
}

export default connect(mapPropsToState)(App)
