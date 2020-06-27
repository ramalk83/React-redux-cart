import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filteredProducts,sortProducts} from '../actions/productActions'

class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                {this.props.count} product found
                </div>
                <div className="col-md-4">
                    <label>Order by
                     <select className="form-control" value={this.props.sort}
                        onChange= {(e) => 
                        {this.props.sortProducts(
                         this.props.filteredProducts,
                         e.target.value
                        )}}>
                      <option value="">Select</option>
                      <option value="lowest">Lowest</option>
                      <option value="highest">Highest</option>
                      </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>Filter Size
                        <select className="form-control" value={this.props.size}
                        onChange={(event) => {
                            this.props.filterProducts(
                              this.props.products,
                              event.target.value);
                         }}>
                      <option value="">ALL</option>
                      <option value="x">XS</option>
                      <option value="s">S</option>
                      <option value="m">M</option>
                      <option value="m">L</option>
                      <option value="xl">XL</option>
                      <option value="xxl">XL</option>
                      </select>
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps= state =>
  ({products:state.products.items,
    filteredProducts: state.products.filteredItems,
    size:state.products.size,
    sort: state.products.sort})


export default connect(mapStateToProps,{filteredProducts})(Filter)