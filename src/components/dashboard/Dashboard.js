import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import NavBar from '../menu/NavBar'
import Category from '../category'

export default class Dashboard extends Component {

    constructor(props){
        super(props)
        const token=localStorage.getItem("token")

        let loggedIn=true
        if(token==null){
            loggedIn=false
        }

        this.state={
            loggedIn
        }
    }

    render() {
     
        if (this.state.loggedIn===false) {
            return <Redirect to='/login' />
        }
        return (
            <div>
                <NavBar />
                <Category/>
            </div>

        )
    }
}



