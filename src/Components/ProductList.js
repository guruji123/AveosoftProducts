import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Select from 'react-select'; 

class ProductList extends Component {
       
    state = {
        products : [],
        value: "",
        categories:[]
    }
  

    componentDidMount() {
        axios.get('https://aveosoft-react-assignment.herokuapp.com/products').then(
            response => {
                this.setState({
                    products : response.data
                })
            });
        axios.get('https://aveosoft-react-assignment.herokuapp.com/categories').then(
            response => {
                this.setState({
                    categories : response.data
                })
            })
            .catch(error => console.log(error.response))
    }
    render() {
        let { products, categories, value } = this.state;
        const options = categories.map(item  => ({label: item.name, value:item.name}));
        products = value.label? products.filter(item => value.label === 'Laptops'? item.categoryId === 0 : item.categoryId === 1)
         : 
         products
         ;
        const productList = products.length ? (
            products.map(products => {
                return (
                        <div className="container-fluid row ">
                            <div className=" col-md  card-deck m-3 p-4">
                            <Link to={{pathname: `/details/${products.id}`}} >
                                <div className="  card " key={products.id} style={{width: '400px'}} >
                                    <div className="card-body bg-danger text-light">
                                        <span className="card-title  text-*-center font-weight-bold">{products.name}</span>
                                            <p className="card-text ">Model : {products.model}<br></br>Price : {products.price}</p>
                                                                            
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                        
                )
            })
        ) : (
            <div className="center">loading...</div>
        )
        return (
            <div className="container-fluid ">
            <h4 className="center text-white text-bold position-relative p-5 ">Products</h4>
            <div style={{width:'40%'}}>
                <Select 
                    className="select"
                    placeholder="Select Category"
                    value={value}
                    onChange={obj => this.setState({value:obj})}
                    options={options}
                />
            </div>

            {productList}
            </div>
        );
    }
}

export default ProductList;