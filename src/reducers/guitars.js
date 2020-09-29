const initialState = {
  isReady: false,
  guitars: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GUITARS':
      return {
        ...state,
        guitars: action.payload,

      };
    case 'SET_IS_READY':
      return {
        ...state,
        isReady: action.payload
      };
    default:
      return state;
  }
};