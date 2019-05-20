import React, { Component } from 'react'

export class Buttons extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="buttonsContainer">
        <button className="previous" onClick={this.props.prev}> {'<'} Previous</button>
            
        <button className="next" onClick={this.props.next}>Next {'>'}</button>
      </div>
    )
  }
}

export default Buttons