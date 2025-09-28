import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  GET_ORDERS_SUCCESS,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS
} from './actionTypes';

const initialState = {
  orders: [],
  currentOrder: null,
  isLoading: false,
  isError: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };

    case ORDER_SUCCESS:
      return {
        ...state,
        orders: [action.payload, ...state.orders],
        isLoading: false,
        isError: false,
        error: null,
      };

    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };

    case GET_ORDER_SUCCESS:
      return {
        ...state,
        currentOrder: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };

    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.map(order =>
          order._id === action.payload._id ? action.payload : order
        ),
        currentOrder: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter(order => order._id !== action.payload),
        isLoading: false,
        isError: false,
        error: null,
      };

    case ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
