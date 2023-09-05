import React, { useState, useReducer } from "react";


function App() {

  const [count, setCount] = useState(10);
  const [list, setList] = useState(["joy", "011151242"]);
  const [name, setName] = useState("");

  // const [state, dispatch] = useReducer(
  //   (state, action) => {
  //     switch (action.type) {
  //       case "SET_ADDRESS":
  //         return {
  //           ...state,
  //           address: action.payload,
  //         };
  //       case "ADD_ADDRESS":
  //         return {
  //           ...state,
  //           addresses: [...state.addresses, action.payload],
  //           address: ""
  //         }

  //       default:
  //         return state;

  //     }
  //   },

  //   {
  //     addresses: [],
  //     address: ""
  //   })


  const addOne = () => {
    setCount(count + 1)
  }

  const addList = (e) => {

    setList((prevlist) => ([...prevlist, name]))
    setName("")

  }

  return (

    <div className="App">

      <button onClick={addOne}>Count = {count}</button>

      <ul>

        {list.map((name) => (

          <li key={name}>{name}</li>

        ))}

      </ul>

      <input
        onChange={(e) => setName(e.target.value)}
        value={name}

      ></input>

      <button onClick={addList}></button>


      {/* <div>
         
         {state.addresses.map((point,index) => (

        

          <div key={index}>{point}</div>
          

         ))}
      
      </div>

      <input
        type="text"
        value={state.address}
        onChange={(e) => {
          const newAddress = e.target.value;
          dispatch({ type: "SET_ADDRESS", payload: newAddress });
        }}
      />

      <div>value = {state.address}</div>

      <button onClick={() => dispatch({ type: "ADD_ADDRESS", payload: state.address })}> ADD </button>

      
 */}



    </div>
  );
}





export default App;
