const initialState = {
  users: [],
  currentUser: null,
  orderStats: null,
  productStats: null,
  userStats: null,
  isLoading: false,
  isError: false,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // Users
    case 'GET_USERS_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };
    case 'GET_USERS_FAIL':
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    // Single User
    case 'GET_USER_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };
    case 'GET_USER_FAIL':
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    // Update User
    case 'UPDATE_USER_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case 'UPDATE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.map(user =>
          user._id === action.payload._id ? action.payload : user
        ),
        currentUser: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };
    case 'UPDATE_USER_FAIL':
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    // Delete User
    case 'DELETE_USER_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload),
        isLoading: false,
        isError: false,
        error: null,
      };
    case 'DELETE_USER_FAIL':
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    // Order Stats
    case 'GET_ORDER_STATS_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case 'GET_ORDER_STATS_SUCCESS':
      return {
        ...state,
        orderStats: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };
    case 'GET_ORDER_STATS_FAIL':
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    // Product Stats
    case 'GET_PRODUCT_STATS_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case 'GET_PRODUCT_STATS_SUCCESS':
      return {
        ...state,
        productStats: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };
    case 'GET_PRODUCT_STATS_FAIL':
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };

    // User Stats
    case 'GET_USER_STATS_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: null,
      };
    case 'GET_USER_STATS_SUCCESS':
      return {
        ...state,
        userStats: action.payload,
        isLoading: false,
        isError: false,
        error: null,
      };
    case 'GET_USER_STATS_FAIL':
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

export default adminReducer;
