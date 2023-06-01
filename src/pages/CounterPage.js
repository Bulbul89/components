import { produce } from "immer";
import {useReducer} from "react";
import Button from "../components/Button";
import Panel from "../components/Panel"
//import useCounter from "../hooks/use-counter"
const INCREAMENT_COUNT = "increament";
const SET_VALUE_TO_ADD ="change_value_to_add"
const DECREAMENT_COUNT ="decreament"
const ADD_VALUE_TO_COUNT ="add_value_to_count"


const reducer = (state,action) => {
switch(action.type) {
  case INCREAMENT_COUNT:
    // return {
    //   ...state,
    //   count:state.count +1 ,
    // }
    state.count=state.count+1
    return
    case DECREAMENT_COUNT:
      // return {
      //   ...state,
      //   count:state.count - 1 ,
      // }
      state.count=state.count-1
      return
  case ADD_VALUE_TO_COUNT:
    // return {
    //   ...state,
    //   count:state.count + state.valueToAdd,
    //   valueToAdd:0
    // }
    state.count=state.count+state.valueToAdd
    state.valueToAdd =0
    return
  case SET_VALUE_TO_ADD:
    // return {
    //   ...state,
    //   valueToAdd:action.payload
    // }
    state.valueToAdd =action.payload
    return
  default:
    return 
}


  
  // if(action.type === INCREAMENT_COUNT){

    // return {
    //   ...state,
    //   count:state.count +1 ,
    // }

  // }
   
  // if(action.type ===  SET_VALUE_TO_ADD){
    // return {
    //   ...state,
    //   valueToAdd:action.payload
    // }
  // }

  // return state

}

function CounterPage ({initialCount}) {
  //const [count,setCount] = useState(initialCount)
  //const [valueToAdd,setValueToAdd] = useState(0)
  const [state, dispatch]= useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  })
 

  

 //const  {count,increament} = useCounter(initialCount)
 const increament =() => {
  dispatch({
    type:INCREAMENT_COUNT,
    
  })
 }
 const decreament =() => {
  //setCount(count - 1)
  dispatch( {
    type:DECREAMENT_COUNT
  })
 }
 const handleChange = (event) => {
  const value = parseInt(event.target.value) || 0 ;
  //setValueToAdd(value)
  dispatch( {
    type:SET_VALUE_TO_ADD,
    payload: value
  })
}
const handleSubmit= (event) => {
  event.preventDefault();
   //setCount(count+valueToAdd)
   //setValueToAdd(0)
   dispatch({
    type:ADD_VALUE_TO_COUNT

   })
  }

 return <Panel className= "m-3">
       <h1 className="text-lg"> Count is {state.count}</h1>
       <div className="flex flex-row">
       <Button onClick={increament}> Increament </Button>
       <Button onClick={decreament}> Decreament </Button>
       </div>
       <form onSubmit={handleSubmit}> 
        <label>Add a lot</label>
        <input 
        value={state.valueToAdd || ""}
        onChange={handleChange}
        type="number" 
        className="p-1 m-3 bg-gray-50 border border-gray-300" 
        />
       </form>
       <Button onClick={handleSubmit}>Add it</Button>
 </Panel>


}

export default CounterPage;