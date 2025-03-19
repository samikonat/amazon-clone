// This file contains the action types used in the application
// The action types are objects that contain a type property with a string value
// The type property is used to identify the type of action being dispatched
// In this case, we have only one action type, which is ADD_TO_BASKET
// This action type is used to add an item to the basket
export const Type = {
  // ADD_TO_BASKET is an action type that is used to add an item to the basket
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
};
