import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { selectProduct } from '../reducers/products'


export const Products = (props) => {
  console.log('props in products', props)
  return (
    <div>
      {props.products.map((product) => {
        return (<div key={product.id} className="col-md-4">
          <Link to={`/products/${product.id}`} onClick={() => props.setProduct(product)}>
            <span><h2>{product.title}</h2>
             <img src={product.image}/>
            </span>
          </Link>
        </div>)
      })}
    </div>
  )
}

// TODOS HERE:
// - for <Link> {/*insert link to one product*/}
// - for <img /> {/*inset image src of product*/}


const mapStateToProps = (state) => {
  // will need to check our state once connected to DB
  return {
    products: state.products.products,
    selectedProduct: state.products.selectedProduct
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setProduct(product) {
      dispatch(selectProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
