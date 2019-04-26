export const numberReducer = (state = {expression:''}, action)  => {
  switch (action.type) {
      case 'CREATE_EXPRESSION':
     
          return state={
                          ...state, 
                          expression: action.payload
                      };
      break;
      default:
          return state;
  }
};