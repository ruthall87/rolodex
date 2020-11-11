
import React, {Component} from 'react'
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state ={
      monster: [],
      searchFeild: ''

    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster: users}))
  }
  render(){  
    const {monster, searchFeild } = this.state;
    const filterMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchFeild.toLowerCase()))
  
  
  
    return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
     
       <SearchBox
        placeholder='search monsters'
        handleChange={e =>this.setState({searchFeild: e.target.value})}
      />
      <CardList monster={filterMonsters}/>
  </div>
  );
}
}
export default App;
