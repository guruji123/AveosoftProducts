import React, {Component} from 'react';
import axios from 'axios';

class Details extends Component {

    state={
        details:[]
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://aveosoft-react-assignment.herokuapp.com/products/${id}`).then(
            response => {
                this.setState({
                    details : response.data
                })
            })
    }
    render() {
        const products = this.state.details;
        return (
            <div className="container  ">
                <h1 className="center text-white text-bold p-5">Details</h1> 
                
                            
                                <div className="  card " key={products.id} width="300px">
                                <img className="card-image-top" src={`../${products.name}.jpg` } alt='products' height="350px" width="100%"/>
                                    <div className="card-body bg-danger text-light">
                                        <span className="card-title  text-*-center font-weight-bold">{products.name}</span>
                                            <p className="card-text m-3 ">Model : {products.model}<br></br>Price : {products.price}</p>
                                                                            
                                    </div>
                                        <div className="card-body bg-danger text-light">
                                        <p className="card-text m-3">{products.description}</p>
                                    </div>
                                </div>
                            </div>
            )
    }
}
export default Details;