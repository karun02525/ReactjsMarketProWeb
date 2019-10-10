import React, { Component, Fragment } from 'react'
import CategoryView from './CategoryView'
import {URL_API} from '../../Constant/ApiConstant';
import axios from 'axios'
import Swal from 'sweetalert2'

export default class CategoryList extends Component {

    constructor(){
        super()
        this.apiCall()
    }

    state = {
        data:[],
    }

    apiCall = () => {
        axios.get(URL_API.GetCategory)
            .then(res => {
                const jsonData = res.data
                console.log("Response: "+ jsonData.data )
                this.setState({
                    data:jsonData.data
                })
                
            }).catch(error => {
                if (error.response) {
                    Swal.fire(error.response.data.message)
                }
                console.log(error)
            })
    }
    render() {
        const {data} = this.state
        return (
            <Fragment>
                <div className="container-fluid mt-5 pt-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h5 className="text-slanted">All Category List</h5>
                        </div>
                    </div>

                    <div className="row">
                        {data.map(cate => {
                            return <CategoryView key={cate.category_id }data={cate}/>
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }

}
