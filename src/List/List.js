import React from "react";
import { stateContext } from "../Context/Context";
import { useState,useContext } from "react";
const List = () => {
    // let allTask= JSON.parse(localStorage.getItem("totalTask"));

     const {state,dispatch}=useContext(stateContext);
     console.log(state.name,state.tasks);
     let updatedTasks=state.tasks;
     console.log(updatedTasks);
  return (
    <div>
      {updatedTasks?.map((e, i) => {
        return (
          <div  key={i}>
            <div>
              <h1>Task Name:{e.name}</h1>
              <h1>Description:{e.des}</h1>
              <h1>Priority:{e.prior ? "Yes" : "No"}</h1>
              <h1>Progress:{e.prgs}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
