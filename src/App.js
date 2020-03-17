import React from 'react';
import ReactToPrint from 'react-to-print';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.printElement = null;
    this.printButtonRef = null;
    this.setPrintElementRef = element => {
      this.printElement = element;
    }
    this.printButtonRef = null;
    this.setPrintButtonRef = element => {
      this.printButtonRef = element;
    }
  }

  runThis = (param) => {
    console.log("run this..", this.printElement);
    this.printButtonRef.className = "HidePrint";
  }
  
  onAfterPrint = () => {
    console.log("run after print");
    this.printButtonRef.className = "ShowPrint";
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    return (
        <div className="App" ref={this.setPrintElementRef} >
          <div>
            <div ref={this.setPrintButtonRef} className="ShowPrint"> 
              <ReactToPrint 
                trigger={() => <a href="#">Print this out!</a>}
                content={() => this.printElement}
                onBeforeGetContent={this.runThis}
                onAfterPrint={this.onAfterPrint} />
            </div>
            <header  className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
              </a>
            </header>
          </div>
        </div>
      );
    }
}

export default App;
