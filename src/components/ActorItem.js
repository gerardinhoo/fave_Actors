import React from 'react';
import Card from "./Card";
import Button from '@material-ui/core/Button';


const ActorItem = ({item, deleteItem, id}) => {
  return (
    <div>
    <Card>
       <div className="card">
        <div className="card-content">
           <li>{item.toUpperCase()} 
           <Button variant="contained" color="secondary" onClick={() => deleteItem(id)} style={{cursor: "pointer"}}>
             Delete
           </Button>
           </li>
          </div>
        </div>
    </Card>

    </div>
  )
}

export default ActorItem;



