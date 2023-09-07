import React, { useReducer } from "react";



function List() {
  const [state, dispatch] = useReducer(
    (state, action) => {

      return{ ...state,
        ...action}
   
  }, {
    first: "",
    last: ""
  })

  return (
    <div>

      <input
        type="text"
        value={state.first}
        onChange={(e) => {
          const first = e.target.value;
          dispatch({ first: first });
        }}
      />
       <input
        type="text"
        value={state.last}
        onChange={(e) => {
          const last = e.target.value;
          dispatch({ last: last});
        }}
      />
      <div>First : {state.first} , last:{state.last}</div>

    </div>

  )



}

function App() {

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_ADDRESS":
          return {
            ...state,
            address: action.payload,
          };
        case "ADD_ADDRESS":
          return {
            ...state,
            addresses: [...state.addresses, action.payload],
            address: ""
          }

        default:
          return state;

      }
    },

    {
      addresses: [],
      address: ""
    })




  return (

    <div className="App">
       

       <List/>

       

      <div>

        {state.addresses.map((point, index) => (



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






    </div>
  );
}





export default App;
