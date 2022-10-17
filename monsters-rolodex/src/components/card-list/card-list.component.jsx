import { Component } from 'react'


class CardList extends Component {

  render() {
    console.log(this.props.monsters);
    const { monsters } = this.props 
    // console.log('render from card');
    return (
      <div className='List'> 
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}


export default CardList;