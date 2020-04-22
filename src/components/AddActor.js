import React, {useState, useEffect} from 'react';
import ActorItem from "./ActorItem";

 const AddActor = () => {
   const [inputText, setInputText] = useState("");
   const [items, setItems] = useState([]);
   const [searchfield, setSearchField] = useState("")


  //  Persist data to local storage - GET ITEMS
   useEffect(() => {
     const data = localStorage.getItem("my-actors");
     if(data) {

      setItems(JSON.parse(data));
     }
   }, []);

  //  Persist data to local storage - SET ITEMS
   useEffect(() => {
     localStorage.setItem("my-actors", JSON.stringify(items))
   })

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

   const deleteItem = (id) => {
     setItems(prevItems => {
       return prevItems.filter((item, i) => {
         return i !== id
       })
     })   
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
        <button className="waves-effect waves-light btn-small" onClick={clickHandler}>Add Actor</button>
     <ul>
       
         {items.map((item, i) => {
           return <ActorItem key={i} id={i} item={item} deleteItem={deleteItem} />
         })
       }
     </ul>
     </div>
    </div>
        
  )
}

export default AddActor;
