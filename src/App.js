import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
// import logo from './assets/logo.svg';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText
} from 'reactstrap';


class App extends Component { // App is the component
  constructor(){
    super();
    this.state = {
      name: '',
      isLoggedIn: false

    }
  }
  handleChange = (event) => {
    this.setState({name: event.target.value, 
                   isLoggedIn: this.state.isLoggedIn})

  }
  onSubmit = () => { // arrow function binds automatically so we don't have to bind on input

    if (this.state.name == "Ulan") {
      const newState1 = {isLoggedIn: true}
      this.setState(newState1)
    } 
    else {
      const newState2 = {isLoggedIn: false}
      this.setState(newState2)
      alert("Please enter correct name!")
    }

  }

  logOut = () => {
    const newState = {name: '', isLoggedIn: false}
    this.setState(newState)
  }

  render () {
    const loc = "SF"
    const loggedIn = <Header isLoggedIn={this.state.isLoggedIn} name={this.state.name} loc={loc}/>
    const guest = (
                  <div className="contr">
                    <h2>Sign In with your Name</h2>
                      <form className="form">
                              <input 
                                    ref="name" 
                                    type="text" 
                                    // size="20" 
                                    placeholder="Name" 
                                    onChange={this.handleChange} value={this.state.name}
                              />
                        <p className="hint">Hint:  U..n </p>
                      </form>
                    <button className="subButton" variant="primary" type="submit" onClick={this.onSubmit}>Sign In</button>
                  </div>        
    )
    const logOut = <button className="logOutButton" onClick={this.logOut}>Log Out</button>

    return (
      <div className="App">
        {this.state.isLoggedIn ? loggedIn: guest}
        {this.state.isLoggedIn ? logOut: null}
      </div>
    )
  }
}

export default App;