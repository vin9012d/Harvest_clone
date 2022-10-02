import * as types from "./actionTypes"
const initialState = {
  expense : [],
  isLoading: false,
  isError: false,
};

export const reducer = (oldstate = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_EXPENSE_REQUEST:
      return {
        ...oldstate,
        isLoading: true,
        isError: false,
      }
    case types.GET_EXPENSE_SUCCESS:
      return {
        ...oldstate,
        expense: payload,
        isLoading: false,
        isError: false,
      }
    case types.GET_EXPENSE_FAILURE:
      return {
        ...oldstate,
        isLoading: false,
        isError: true,
      }
    case types.DELETE_EXPENSE_REQUEST:
      return {
        ...oldstate,
        isLoading: true,
        isError: false,
      }
    case types.DELETE_EXPENSE_SUCCESS:
      return {
        ...oldstate,

        isLoading: false,
        isError: false,
      }
    case types.DELETE_EXPENSE_FAILURE:
      return {
        ...oldstate,
        isLoading: false,
        isError: true,
      }
      case types.EDIT_EXPENSE_REQUEST:
        return {
          ...oldstate,
          isLoading: true,
          isError: false,
        }
      case types.EDIT_EXPENSE_SUCCESS:
        return {
          ...oldstate,
          isLoading: false,
          isError: false,
        }
      case types.EDIT_EXPENSE_FAILURE:
        return {
          ...oldstate,
          isLoading: false,
          isError: true,
        }
        case types.ADD_EXPENSE_REQUEST:
      return {
        ...oldstate,
        isLoading: true,
        isError: false,
      }
    case types.ADD_EXPENSE_SUCCESS:
      return {
        ...oldstate,
        isLoading: false,
        isError: false,
      }
    case types.ADD_EXPENSE_FAILURE:
      return {
        ...oldstate,
        isLoading: false,
        isError: true,
      }
    default:

      return oldstate;
  }
}