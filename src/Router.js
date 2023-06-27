import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Form from "./Form/Form";
import List from "./List/List";
import { stateContext } from "./Context/Context";
import { stateReducer, initialState } from "./Context/stateReducer"; 

const Router = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <stateContext.Provider value={{ state,dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Form />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  );
};

export default Router;
