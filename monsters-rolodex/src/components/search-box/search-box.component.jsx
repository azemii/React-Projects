import { Component } from "react";


class SearchBox extends Component {
  render() {
    return (
      <input
      // className='searchBox' 
      type='search' 
      // placeholder='Search Monsters' 
      onChange= {this.props.onChangeHandler}
      />

    )
  }
}


export default SearchBox;