import { Component } from 'react'; // Used for class component
import { useState } from 'react'; // Used for functional component
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


// Functional component
const App = () => {

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField };
    });
  }
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
          className="monsters-search-box" 
          onChangeHandler={onSearchChange} 
          placeholder="Search monsters"
          />
    </div>
  );
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>  
//       this.setState(() => {
//         return { monsters: users }
//     })
//     );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {
//     // console.log('render from app');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     }
//     );  

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           className="monsters-search-box" 
//           onChangeHandler={onSearchChange} 
//           placeholder="Search monsters"
//           />
//         <CardList 
//           monsters= { filteredMonsters }
//           />
          
//       </div>
//     );
//   }
// }

export default App;
