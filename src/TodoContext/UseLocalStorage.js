import {  useEffect } from "react";
import { useState } from "react";

function useLocalStorage(itemName, initialValue){
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);



  useEffect(() =>{
  
   setTimeout(() => {
    try{
      const localStorageItem= localStorage.getItem(itemName);
  
      let parsedItem;
  
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else{
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
      }
  
      setLoading(false);
     } catch(error){
      setLoading(false);
      setError(error)
     }
   }, 2000);
  }, [ ])



  

  const saveItem = (newItems) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItems)); 
    setItem(newItems);
  };

 
  return {item,
          saveItem, 
          loading, 
          error
         };
}

export {useLocalStorage}

/* localStorage.removeItem('TODOS_V1');

 const defaultTodos = [
   { text: 'Besar a mike ', completed: true },
   { text: 'Sacar a blooks del plan familiar', completed: false },
   { text: 'Curtir a coco', completed: false },
   { text: 'Meterle el pene a david ', completed: false },
   { text: 'Quitarle la virginidad a Figi ', completed: false },
];;

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */