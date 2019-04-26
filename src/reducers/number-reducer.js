import { solve } from "../helper/common";

export const numberReducer = (state = {expression:'', solved: false}, action)  => {
  switch (action.type) {
      case 'CREATE_EXPRESSION':
          
          return state={
                          ...state, 
                          expression: action.payload,
                          solved: false
                      };
      break;
      case 'SOLVE_EXPRESSION':
        return state={
            ...state, 
            expression: solve(state.expression),
            solved: true
        };
      break;
      case 'REMOVE_EXPRESSION':
        return state={
            ...state, 
            expression: "",
            solved: false
        };
      break;
      default:
          return state;
  }
};