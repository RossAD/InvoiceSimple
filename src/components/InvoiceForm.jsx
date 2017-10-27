import React from 'react'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/customerActions.js'
import { fetchProducts } from '../actions/productActions.js'
import { 
  fetchInvoiceItem, 
  fetchInvoiceItems, 
  fetchUpdateInvoiceItem, 
  fetchDeleteInvoiceItem 
} from '../actions/invoiceItemActions.js'

class InvoiceForm extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      selectedCustomer:{},
      selectedProduct:{},
      invoiceProducts:[],
      productQuantity:0,
      invoiceTotal:0
    }
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchCustomers())
    dispatch(fetchProducts())
  }

  render() {
    return(
      <div>
        <form>
          <label>
            Choose Customer:
            <select value={this.state.selectedCustomer}>{
              this.props.customers.customers.map(item => (
                <option value={item.id}>{item.name}</option>
              ))
            }</select>
          </label>
          <label>
            Choose Product
            <select value={this.state.selectedProduct}>{
              this.props.products.products.map(item => (
                <option value={item.id}>{item.name}</option>
              ))
            }</select>
          </label>
          <label>
            Product Quantity
            <input value={this.state.quantity} />
          </label>
          <label>
            Invoice Discount
            <input value={this.state.discount} />
          </label>
          <label>
            Invoice Total
            {this.state.total}
          </label>
        </form>
      </div>  
    )
  }
}

const mapPropsToState = state => {
  const { customers, products } = state
  return {
    customers,
    products
  }
}

export default connect(mapPropsToState)(InvoiceForm)
