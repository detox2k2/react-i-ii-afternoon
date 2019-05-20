import React, { Component } from 'react'

export class Buttons extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="buttonsContainer">
        <button className="previous" onClick={this.props.prev}> {'<'} Previous</button>
            <div className='middleContainer'>
            <button className="edit">Edit</button>
            <button className="delete" onClick={this.props.delete}> Delete</button>
            <button className="new">New</button>
            </div>
        <button className="next" onClick={this.props.next}>Next {'>'}</button>
      </div>
    )
  }
}

export default Buttons