import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { fetchInvoices, fetchAddInvoice, fetchDeleteInvoice } from '../actions/invoiceActions.js'
import { fetchCustomers } from '../actions/customerActions.js'
import { fetchProducts } from '../actions/productActions.js'
import InvoiceForm from './InvoiceForm.jsx'
import {openModal} from '../actions/modalActions.js'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchInvoices())
  }

  handleOpenModal = () => {
    const { dispatch } = this.props
    dispatch(fetchAddInvoice({customer_id:0,discount:0,total:0}))
    dispatch(fetchInvoices())
    dispatch(openModal())
  }

  handleDeleteInvoice = (item) => {
    const {dispatch, invoices} = this.props
    dispatch(fetchDeleteInvoice(item))
    dispatch(fetchInvoices())
  }


  render() {
    const { invoices } = this.props
    const listInvoices = invoices.invoices.map(item => (
      <li key={item.id}>
        <span>Item ID:  {item.id} <button onClick={() => this.handleDeleteInvoice(item)} className='btn btn-danger'>Delete</button></span></li>
    ))

    return (
      <div>
        <Navbar onClick={(path) => alert(`Show ${path}`)} />
        <div className="container">
          Invoice List
          <div>
            <ul>{listInvoices}</ul>        
          </div>
          <div>
            <button 
              className="btn btn-default" 
              onClick={this.handleOpenModal}
            >Add Invoice
            </button>
          </div>
        </div>
        <InvoiceForm />
      </div>
    )
  }
}

const mapPropsToState = state => {
  const { 
    invoices, 
    customers, 
    products, 
    modal 
  } = state
  return {
    invoices,
    customers,
    products,
    modal,
  }
}

export default connect(mapPropsToState)(App)
