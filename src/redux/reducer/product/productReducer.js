const initialState = {
  isFetched: false,
  product: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "start-fetch":
      return {
        ...state,
        loading: true,
        isFetched: true,
      };
    case "Fetched_Data":
      return {
        ...state,
        product: action.payload,
        loading: false,
        isFetched: true,
      };

    default:
      return state;
  }
};
export default productReducer;
