import React, {useEffect, useState} from "react";

const FunComponent = () => {
  const [items, setItems] = useState([]);
  const addItem = () =>{
    const newItems = [{"task":document.getElementById('input').value, "done":false}, ...items]
    setItems(newItems);
  }

  useEffect(() => {
    console.log("useEffect componentDidMount");
  }, []) //componentDidMount

  useEffect(() => {
    console.log("useEffect componentDidUpdate");
  }, [items]) //[]里面是componentDidUpdate的条件, 若同时componentDidMount也存在，则只保留componentDidUpdate即可

  useEffect(() => {
    console.log("useEffect componentWillUnmount");
    return (()=> {
      console.log("useEffect componentWillUnmount 1");
    })
  }, [items])

  return (
    <div>
      <input id="input"></input>
      <div>
        TodoList
        <ul>
        {
          items.map((item, index) => {
            return <li key={index}>{item.task}</li>;
          })
        }
        </ul>
      </div>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default React.memo(FunComponent)//React.memo()相当于shouldComponentUpdate，即这个component的props或state变化时，才render;