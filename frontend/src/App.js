import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    items: []
  }
  listItems = () => {
    return this.state.items.map(item => {
      return <li>{item.label}</li>
    })
  }
  componentDidMount = () => {
    fetch("http://localhost:4000/items")
      .then(response => response.json())
      .then(({ items }) => {
        this.setState({ items })
      })
  }
  render(){
    return (
      <div className="App">
        <ul className="list">{this.listItems()}</ul>
      </div>
    );
  }
}

export default App;
