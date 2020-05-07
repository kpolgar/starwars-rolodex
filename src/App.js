import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users.results }));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render () {

    const { monsters, searchField} = this.state;
    //equivalent of const monsters = this.state.monsters;
    // and const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
          <div className="App">
          <h1>Starwars Rolodex</h1>   
          <SearchBox
                placeholder='Search Characters'
                handleChange= {this.handleChange}
              />
              <CardList monsters={filteredMonsters}>
              
              </CardList>
          </div>
        );
  }
}

export default App;

