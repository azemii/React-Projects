import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";


// This is a functional component
const CardList = ({monsters}) => (
  // Implicit return, no need for return statement and curly braces.
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
