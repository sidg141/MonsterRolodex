import './App.css';
import React ,{ Component } from 'react';
import {CardList} from './Components/card-list-compont/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
     'monster' :[],
     'searchField':''
    }; 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({'monster':user}))
  }
  
  handleChange = (e) => {
    this.setState({'searchField':e.target.value});
  }
  render(){
    const {monster , searchField} = this.state;
    const filteredMonster = monster.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox 
        placeholder='Search Monster' 
        handleChange={this.handleChange}
        />
         <CardList monster={filteredMonster}/>
      </div>
    );
  }
}

export default App;
