import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";
// import { type } from "@testing-library/user-event/dist/type";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const APIlink = "https://api.pujakaitem.com/api/products";

  const intialState = {
    isLoading: false,
    isErorr: false,
    products: [],
    featuredProducts: [],
    isSingleLoading: true,
    SingleData: [],
  };

  // const [dataHolder, setDataHolder] = useState();

  const [state, dispatch] = useReducer(reducer, intialState);

  const APIfunction = async (pathAPI) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const responsedData = await axios.get(pathAPI);
      const products = await responsedData.data;
      dispatch({ type: "SET_API_DATA", payload: products });
      // console.log(products, "Vinay");
    } catch (error) {
      dispatch({ type: "DATA_ERROR" });
    }

    // console.log(myProdustsData);
    // console.log(responsedData);
    // setDataHolder(myProdustsData);
  };

  // my 2nd api call for single product

  const GetSingleProduct = async (apiPath) => {
    dispatch({ type: "SINGLE_LOADING" });
    try {
      const singleRes = await axios.get(apiPath);
      const SingleData = await singleRes.data;
      dispatch({ type: "SINGLE_DATA", payload: SingleData }); // console.log(SingleData, "singledatda");
      // console.log("SingleData", SingleData);
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    APIfunction(APIlink);
    GetSingleProduct(APIlink);
    // setDataHolder();
  }, []);
  // console.log(dataHolder);

  return (
    <>
      <AppContext.Provider value={{ ...state, GetSingleProduct }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
