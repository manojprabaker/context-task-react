  import React from "react";
import {useContext } from "react";
import {useNavigate } from "react-router-dom";
import { stateContext } from "../Context/Context";
var z=[]; 
const Form = () => { 
    const navigate = useNavigate();
    const {state,dispatch}=useContext(stateContext);
 // console.log(state.name,state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("hehhe");
    
    let obj = {
      name: e.target.name.value,
      des: e.target.des.value,
      prior: e.target.check.checked,
      prgs: e.target.select.value,
    };
    z.push(obj);
 //   localStorage.setItem("totalTask", JSON.stringify(z)); 
    let aa="Prabaker"
    dispatch({type:"UpdateName",payload:aa});
    dispatch({type:"UpdateTasks",payload:z});
  };
 let goNextPage=()=>{
    navigate(`/List`);
  }
  //---------------- context -------------

  return (
    <div>
      {state?.name}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Task Name" name="name"></input>
        </div>
        <div>
          <textarea name="des" placeholder="Enter Task Description" />
        </div>
        <div>
          <input type="checkbox" name="check"></input>
          <label> Prioritize </label>
        </div>
        <div>
          <label>Progress</label>
          <select name="select">
            <option value="ToDo">To Do</option>

            <option value="OnGoing">On Going</option>

            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
      <button onClick={goNextPage}>Go To List</button>
    </div>
  );
};

export default Form;
