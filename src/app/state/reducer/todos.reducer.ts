import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from '../action/todo.action';

const initialState = {
    data: [],
    pending: false,
    error: null
  };

export function todos(state = initialState, {type, payload}) {
  switch(type) {
    case GET_TODOS:
      return Object.assign({}, state, {pending: true, error: null});
    case GET_TODOS_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false, error:null});
    case GET_TODOS_ERROR:
      return Object.assign({}, state, {pending: false, error:'Error'});
    default:
      return state;
  }
}