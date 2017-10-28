import React from 'react'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/customerActions.js'
import { fetchProducts } from '../actions/productActions.js'
import { 
  fetchInvoiceItem, 
  fetchInvoiceItems, 
  fetchUpdateInvoiceItem, 
  fetchDeleteInvoiceItem,
  fetchAddInvoiceItem
} from '../actions/invoiceItemActions.js'

class InvoiceForm extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      selectedCustomer:{},
      selectedProduct:{},
      invoiceProducts:[],
      productQuantity:0,
      discount: 0,
      invoiceTotal:0
    }
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchCustomers())
    dispatch(fetchProducts())
  }

  handleFormChange = (event) => {
    const {dipatch} = this.props
    const invoiceObj = {
      'customerId':this.state.selectedCustomer.id,
      'discount':this.state.discount,
      'total':this.state.invoiceTotal
    }
    if(this.props.invoiceItem.items.contains(this.state.selectedProduct)){
      dispatch(fetchUpdateInvoiceItem(this.state.selectedProduct))
    } else {
      dispatch(fetchAddInvoiceItem(this.state.selectedProduct))
    }
    dispatch(f)
  }

  handleCustomerChange = (event) => {
    this.setState({selectedCustomer: event.target.value})
  }

  handleProductChange = (event) => {
    this.setState({selectedProduct: event.target.value})
  }

  handleQuantityChange = (event) => {
    let sum = 0
    this.setState({productQuantity: event.target.value})
  }

  handleDiscountChange = (event) => {
    this.setState({discount: event.target.value})
  }

  render() {
    return(
      <div>
        <form onChange={this.handleChange}>
          <label>
            Choose Customer:
            <select 
              value={this.state.selectedCustomer}
              onChange={this.handleCustomerChange}
            >{
              this.props.customers.customers.map(item => (
                <option value={item.id}>{item.name}</option>
              ))
            }</select>
          </label>
          <label>
            Choose Product
            <select 
              value={this.state.selectedProduct}
              onChange={this.handleProductChange}
            >{
              this.props.products.products.map(item => (
                <option value={item.id}>{item.name}</option>
              ))
            }</select>
          </label>
          <label>
            Product Quantity
            <input 
              value={this.state.quantity} 
              onChange={this.handleQuantityChange}
            />
          </label>
          <label>
            Invoice Discount
            <input 
              value={this.state.discount} 
              onChange={this.handleDiscountChange}
            />
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
    products,
    invoices
  }
}

export default connect(mapPropsToState)(InvoiceForm)
