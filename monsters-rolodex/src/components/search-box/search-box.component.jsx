import { Component } from "react";

import './search-box.styles.css'; // This is still a global 

// This is a functional component
const SearchBox = ({className, placeholder, onChangeHandler}) => (
  // Implicit return with no need for return statement and curly braces.
  <input
  className= {`search-box ${className}`}
  type='search' 
  placeholder= {placeholder}
  onChange= {onChangeHandler}
  />
);

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//       className= {`search-box ${this.props.className}`}
//       type='search' 
//       placeholder= {this.props.placeholder}
//       onChange= {this.props.onChangeHandler}
//       />
//     )
//   }
// }


export default SearchBox;