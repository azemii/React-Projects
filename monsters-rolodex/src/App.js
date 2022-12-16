import { Component } from 'react'; // Used for class component
import { useEffect ,useState } from 'react'; // Used for functional component

import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


// Functional component
// ?Every time the state changes, the component re-renders, runs all code
// ?In a class component, only the render method runs when the state changes
const App = () => {
  // First element is the state, second is the function to update the state
  // useState() returns an array with two elements
  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  console.log('render from app');

  // useEffect() is a hook that runs after every render
  // The second argument is an array of dependencies that will trigger the hook to run if they change
  // If the array is empty, the hook will run only once, after the first render
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

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
