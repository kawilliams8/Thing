import React from 'react';
import './Card.css';

const Card = (props) => {
  const { title, description, id } = props.data;
  const { removeThing } = props;
  return(
    <div className="Card">
      <h4>{title}</h4>
      <h4>{description}</h4>
      <button onClick={() => removeThing(id)}>DELETE ME</button>
    </div>
  )
}

export default Card;