import React, {useState} from 'react';
import ActorItem from "./ActorItem";

 const AddActor = () => {
   const [inputText, setInputText] = useState("");
   const [items, setItems] = useState([]);

   const onChangeHandler = (e) => {
     const newValue = e.target.value
     setInputText(newValue)
   }

   const onKeyPressHandler = (e) => {
     if(e.key === "Enter") {
      setItems((prevItems) => {
        return ([...prevItems, inputText]);
      })
      setInputText("")
     }
   }

   const clickHandler = () => {
     setItems((prevItems) => {
       return ([...prevItems, inputText]);
     })
     setInputText("")
   }
  return (
    <div className="row">
      <div className="input-field col s6" >
        <input  
        type="text" 
        className="validate" 
        placeholder="Add Favorite Actor" 
        style={{color: "white"}} 
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
        value={inputText}
        />
        <a className="waves-effect waves-light btn-small" onClick={clickHandler}>Add Actor</a>
     <ul>
       {
         items.map((item, i) => {
           return <ActorItem key={i} item={item} />
         })
       }
     </ul>
     </div>
    </div>
        
  )
}

export default AddActor;
