import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { fetchInvoices } from '../actions/invoiceActions.js'
import { fetchCustomers } from '../actions/customerActions.js'
import { fetchProducts } from '../actions/productActions.js'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchInvoices())
    this.props.dispatch(fetchCustomers())
    this.props.dispatch(fetchProducts())
  }

  render() {
    const { invoices } = this.props
    const listInvoices = invoices.map(item => (
      <li>Item ID:  {item.id}</li>
    ))

    return (
      <div>
        <Navbar onClick={(path) => alert(`Show ${path}`)} />

        <div className="container">
          Invoice List
          <div>
            <ul>{this.products.listInvoices}</ul>        
          </div>
          <div>
            <button>Add Invoice</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapPropsToState = state => {
  const { invoices, customers, products } = state
  return {
    invoices,
    customers,
    products,
  }
}

export default connect(mapPropsToState)(App)
