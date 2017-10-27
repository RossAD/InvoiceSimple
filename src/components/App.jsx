import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { fetchInvoices } from '../actions/invoiceActions.js'
import { fetchCustomers } from '../actions/customerActions.js'
import { fetchProducts } from '../actions/productActions.js'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchInvoices())
    this.props.dispatch(fetchProducts())
    this.props.dispatch(fetchCustomers())
  }

  componentDidMount() {
    console.log('my props: ', this.props)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.contacts !== this.props.contacts){
      this.nextProps.dispatch(fetchCustomers())
    }
  }

  render() {
    const { invoices, customers, products } = this.props
    const listInvoices = invoices.invoices.map(item => (
      <li>Item ID:  {item.id}</li>
    ))
    const listProducts = products.products.map(item => (
      <li key={item.id}>{item.name}</li>
    ))

    return (
      <div>
        <Navbar onClick={(path) => alert(`Show ${path}`)} />

        <div className="container">
          Invoice List
          <div>
            <ol>{listProducts}</ol>        
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
