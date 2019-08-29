import React from 'react';
import './Container.css';
import Card from '../Card/Card';

const Container = (props) => {
  const { data, removeThing } = props;
  const thingCards = data.map((thing, index) => {
    return <Card 
      key={index}
      data={thing}
      removeThing={removeThing}
    />
  })

  return (
    <div className="Container">
      <h2>Container</h2>
      {thingCards}
    </div>
  )

}

export default Container;