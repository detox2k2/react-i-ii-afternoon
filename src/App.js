import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Buttons from './components/Buttons'
import Counter from './components/Counter'
import Person from './components/Person'
import data from './components/data'
console.log(data)
class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleNext(){
    this.setState({count: (this.state.count + 1) % 25})
    if(this.state.count === 24){
      this.setState({
        count: 24,
      })
    }
    
  }

  handlePrev(){
   this.setState({count: (this.state.count - 1) % 25})
   if(this.state.count <= 0){
     this.setState({
       count: 0
     })
   }
  }

  handleDelete(){
    this.setState({
      count: this.state.count - 1
  
    })
  }
  
  render() {
   
    if(this.state.count >=0){
    return (
      <div>
      <Home />
      <div className="App">
     
       
        <div className='card'>
      <Person data={data} count={this.state.count}/>
        
      <Counter count={this.state.count + 1}/>  
        </div>
        <Buttons next={this.handleNext} prev={this.handlePrev} delete={this.handleDelete}/>
      </div>
     </div>
    );
    }else if(this.state.count < 0) {
      return (
        <div>
        <Home />
        <div className="App">
      
         
          <div className='card'>
        
          
        
          </div>
          <Buttons next={this.handleNext} prev={this.handlePrev} delete={this.handleDelete}/>
        </div>
       </div>
      )
    }
  } 
}

export default App;


