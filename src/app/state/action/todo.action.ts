export const GET_TODOS = "GET_TODOS";

export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";

export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export function getTodos() {
  return {
    type: GET_TODOS
  };
}