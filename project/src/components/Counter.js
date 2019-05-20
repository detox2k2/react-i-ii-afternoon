import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        <p className='counting'>{this.props.count}/25</p>
      </div>
    )
  }
}

export default Counter
