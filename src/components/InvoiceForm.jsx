import React from 'react'
import { Modal } from 'react-bootstrap'
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
import { fetchUpdateInvoice } from '../actions/invoiceActions.js'
import { closeModal } from '../actions/modalActions.js'

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
    const {dispatch} = this.props
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
  }

  handleCustomerChange = (event) => {
    this.setState({selectedCustomer: event.target.value})
    this.props.dispatch(fetchUpdateInvoice({
    id: this.props.invoices.invoiceObj.id,  
    customer_id: event.target.value
    }))
  }

  handleProductChange = (event) => {
    this.setState({selectedProduct: event.target.value})
    this.props.dispatch(fetchAddInvoiceItem())
  }

  handleQuantityChange = (event) => {
    let sum = 0
    this.setState({productQuantity: event.target.value})
  }

  handleDiscountChange = (event) => {
    this.setState({discount: event.target.value})
    this.props.dispatch(fetchUpdateInvoice({
      id: this.props.invoices.invoiceObj.id,
      discount: event.target.value
    }))
  }

  handleCloseModal = () => {
    this.props.dispatch(closeModal())
  }

  render() {
    const {modal,customers,products} = this.props
    return(
      <Modal show={this.props.modal.modalOpen} onHide={this.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container" onChange={this.handleChange}>
            <div className="form-group">
              <label>
                Choose Customer:
                <select 
                  className="form-control"
                  value={this.state.selectedCustomer}
                  onChange={this.handleCustomerChange}
                >{
                  customers.customers.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))
                }</select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Choose Product
                <select 
                  className="form-control"
                  value={this.state.selectedProduct}
                  onChange={this.handleProductChange}
                >{
                  products.products.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))
                }</select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Product Quantity
                <input 
                  className="form-control"
                  value={this.state.quantity} 
                  onChange={this.handleQuantityChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Invoice Discount
                <input 
                  className="form-control"
                  value={this.state.discount} 
                  onChange={this.handleDiscountChange}
                />
              </label>
            </div>  
            <div className="form-group"> 
            <label>
                Invoice Total
                <div className="form-control">
                  {this.state.total}
                </div>
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button 
            className="btn btn-default" 
            onClick={this.handleCloseModal}
          >Close
          </button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapPropsToState = state => {
  const { customers, products, invoices, modal } = state
  return {
    customers,
    products,
    invoices,
    modal
  }
}

export default connect(mapPropsToState)(InvoiceForm)
