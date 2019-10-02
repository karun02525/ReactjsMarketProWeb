import React, { Component,Fragment } from 'react'


export default class CategoryView extends Component {
    render() {
        const { category_id,category_name,category_avatar} = this.props.data
        return (
            <Fragment>
                <div className="col-12 mx-auto col-md-4 col-lg-3 my-3">
                    <div className="card text-center">
                        <img src={`http://localhost:8081/api/image-category/${category_avatar}`} 
                        className="img-card-center"
                        style={mystyle}alt="recipe" />
                        <div className="card-body"><h6>{category_name}</h6> </div>

                        <div className="card-footer text-center">
                            <button type="button" className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mystyle = {
    height: "100px",
    width:"100px",
    margin:"auto",
    "padding-top": "10px"
  };