import { Component } from "react";
import "./card.styles.css";


// This is a functional component
const Card = ({ monster }) => (
  // Implicit return, no need for return statement and curly braces.
  <div className="card-container">
    <img
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      alt={`monster ${monster.name}`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);

// class Card extends Component {
//   render() {
//     const { monster } = this.props;
//     const { id, name, email } = monster;

//     return (
//       <div className="card-container">
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
