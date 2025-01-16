import { useState } from "react";

function useLocalStorage(itemName, initialValue){


  const localStorageItem= localStorage.getItem(itemName);

  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else{
      parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItems) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItems)); 
    setItem(newItems);
  };

  return [item, saveItem];
}

export {useLocalStorage}