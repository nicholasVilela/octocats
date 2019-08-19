import React, { Component } from 'react'
import Square from './Square'
import * as axios from 'axios'

class List extends Component {
    state = {
        arr:[]
    }

    componentDidMount = () => {
        axios.get('https://sdg-octodex.herokuapp.com/')
            .then(res => {
                const temp = res.data.data

                this.setState({
                    arr: temp
                })
            })
    }

    render = () => {
        return this.state.arr.map(item => {
            return <Square source={item.image} name={item.name} number={item.number} /> 
        })
    }
}

export default List