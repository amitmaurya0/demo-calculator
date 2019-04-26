export const createExpression = payload =>({
  type: 'CREATE_EXPRESSION',
  payload
})
export const solveExpression = payload =>({
  type: 'SOLVE_EXPRESSION',
  payload
})
export const removeExpression = payload =>({
  type: 'REMOVE_EXPRESSION',
  payload:''
})