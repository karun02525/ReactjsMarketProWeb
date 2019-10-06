import React, { Component } from 'react'

export default class ShopView extends Component {
    render() {
        return (
            <div>                <div class="container">
                    <h1 class="well">View Form</h1>
                    <div class="col-lg-12 well">
                        <div class="row">
                            <form>
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-6 form-group">
                                            <label>First Name</label>
                                            <input type="text" placeholder="Enter First Name Here.." class="form-control" />
                                        </div>
                                        <div class="col-sm-6 form-group">
                                            <label>Last Name</label>
                                            <input type="text" placeholder="Enter Last Name Here.." class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Address</label>
                                        <textarea placeholder="Enter Address Here.." rows="3" class="form-control"></textarea>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Website</label>
                                        <input type="text" placeholder="Enter Website Name Here.." class="form-control" />
                                    </div>
                                    <button type="button" class="btn btn-lg btn-info">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
