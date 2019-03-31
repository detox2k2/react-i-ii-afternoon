import React, { Component } from 'react'

export class Person extends Component {
    constructor(props){
        super(props)
    }
  render() {
      const person = `${this.props.data[this.props.count].name.first} ${this.props.data[this.props.count].name.last}`
      const from = `${this.props.data[this.props.count].city} ${this.props.data[this.props.count].country}`
      const title = `${this.props.data[this.props.count].title}`
      const employer = `${this.props.data[this.props.count].employer}`
      const movies = this.props.data[this.props.count].favoriteMovies.map(item => {
          return <li>{item}</li>
      })
    return (
      <div className='person'> 
        <h1 className='name'>{person}</h1>
        <div className='bio'> 
        <p><strong>From:</strong> {from}</p>
        <p><strong>Job Title:</strong> {title}</p> 
        <p><strong>Employer:</strong> {employer}</p>
        </div>
        <div className='favoriteMovies'>
        <h2>Favorite Movies</h2>
            <ol>
            {movies}
            </ol>
        </div>
      </div>
    )
  }
}

export default Person