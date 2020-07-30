import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//import List from './Components/list';
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: null,
      dataReady: false,
      name: 'batman',
      age: 5,
      job: 'hes Batman!',
      count: 0
    };

  }
  addToCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  componentDidMount() {
    axios.get('http://localhost:5000/api/collections').then(res => {
      console.log(res);
      this.setState({
        id: res.data,
        dataReady: true
      });
    });
  }

  getCollections = () => {

  }

  render() {
    console.log('this.state', this.state);

    if (this.state.dataReady === false) {
      return null;
    }
    console.log('rendering the app');

    return (
      <div>
        <h2>New App</h2>
        <p>count:{this.state.count}</p>
        <p>State called: {this.state.name}</p>
        <p>age: {this.state.age}</p>
        <div>{this.state.dataReady}</div>
        <button onClick={this.addToCount}> Click</button>
        {this.state.dataReady ? <div>{this.state.id[1].title}</div> : <div>oops</div>}
      </div>
    );
  }
}

export default App;