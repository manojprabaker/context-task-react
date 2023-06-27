export const initialState = {
  name: "manoj",
  tasks: [],
}; 
export const stateReducer = (state, action) => {
  console.log("called");

  switch (action.type) {
    case "UpdateName":
      return {
        ...state,
        name: action.payload,
      };
      case "UpdateTasks":
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};
