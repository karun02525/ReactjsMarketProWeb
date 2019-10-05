import React, { Component, Fragment } from 'react'
import CategoryList from './CategoryList'
import axios from 'axios'
import Swal from 'sweetalert2'
import NavBar from '../menu/NavBar'

export default class Recipe extends Component {
      
    render() {
        return (
            <React.Fragment>
                 <NavBar />
                 <CategoryList />
            </React.Fragment>
          )
    }
}
