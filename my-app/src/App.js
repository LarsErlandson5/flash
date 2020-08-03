import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//import List from './Components/list';
import axios from "axios";
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      dataReady: false,
      selectedCategory: 'none'
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
        data: res.data,
        dataReady: true
      });
    });
  }

  getCollections = () => {

  }

  categoryButtonClicked = (title) => {
    this.setState({
      selectedCategory: title
    })
  }

  render() {
    console.log('this.state', this.state);

    if (this.state.dataReady === false) {
      return null;
    }
    console.log('rendering the app');

    return (
      <div>
        <Card style={{ width: '18rem' }}>
          {
            this.state.dataReady ? this.state.data.map((category, index) => (
              <Card.Body key={index}>
                <Card.Title>{category.title}</Card.Title>
                <Button onClick={() => this.categoryButtonClicked(category.title)}
                  variant="primary">Fip Card</Button>
                {
                  this.state.selectedCategory === category.title ? (
        
                    category.cards.map((card, index) => (
                      <div key={`card-${index}`}>
                         <h3>     {card.word}</h3>
                      </div> 
                    ))
                  ) : null
                }
              </Card.Body>
            )) : <div>oops</div>
          }

        </Card>

      </div>
    );
  }
}

export default App;