import React from 'react';
import Card from "./Card"

const ActorItem = ({item}) => {
  return (
    <div>
    <Card>
       <div className="card">
        <div className="card-content">
           <li>{item.toUpperCase()} <span>X</span></li>
          </div>
        </div>
    </Card>

    </div>
  )
}

export default ActorItem;



