import React, { Component, Fragment } from 'react'
import CategoryList from './CategoryList'
import axios from 'axios'
import Swal from 'sweetalert2'
//import {category} from '../../tempList'

export default class Recipe extends Component {
      
    render() {
        return (<CategoryList />)
    }
}
