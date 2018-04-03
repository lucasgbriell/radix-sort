import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card_comp from './Components/Card_comp'
import radix from './radix'
class App extends Component {
  constructor() {
    super();
    this.state = {
        my_array: [],
        value: ''
    };
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.orderArray = this.orderArray.bind(this);
}
add() {
    if ((this.state.value != undefined) && (this.state.value != "")){
        this.setState({ my_array: this.state.my_array.concat(parseInt(this.state.value)) })
        this.setState({value: ''});
    }
}
handleChange(event) {
    this.setState({value: event.target.value});
}

orderArray(event) {
    radix(this.state.my_array)
    this.setState({value: ''});
}
  render() {
    //radix(this.state.my_array)
    return (
      <div className="App">
         <div className="row">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      

        <div className="container">
            <div class="col-md-12 space-10"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3 input-div">
                <input type="number" min="0" value={this.state.value} onChange={this.handleChange} />
                <div className="col-md-1"></div>
                <button type="submit" value="Submit" onClick={this.add.bind()}>Insert</button>
                <div className="col-md-1"></div>
                <button type="submit" value="Submit" onClick={this.orderArray.bind()}>order</button>
            </div>
            <div className="col-md-3"></div>
        </div>
            <div className="col-md-1 col-sm-2"></div>
            <div className="col-md-11 text-center centered">
               {
                   this.state.my_array.map(function(item, index){
                    return <Card_comp value={item} key={index} index={index}/>
                   })
               } 
            </div>
        </div>
     </div>
    );
  }
}

export default App;
