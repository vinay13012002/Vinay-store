export default function ProductReducer(state, action) {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }
  // if (action.type === "DATA_ERROR") {
  //   return {
  //     ...state,
  //     isErorr: true,
  //     isLoading: false,
  //   };
  // }
  // return state;

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA": {
      const futureData = action.payload.filter((curEle) => {
        return curEle.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: futureData,
      };
    }

    case "DATA_ERROR":
      return {
        ...state,
        isErorr: true,
        isLoading: false,
      };

    case "SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_DATA": {
      // console.log("action", action.payload);
      return {
        ...state,
        isSingleLoading: false,
        SingleData: action.payload,
      };
    }

    case "SINGLE_ERROR":
      return {
        ...state,
        isErorr: true,
        isSingleLoading: false,
      };

    default:
      return state;
  }
}
