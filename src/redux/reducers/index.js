import authReducer from "./Auth/authReducers";
import brandReducer from "./Brand/brandReducers";
import locationReducer from "./Location/locationReducers";
import systemReducer from "./System/systemReducers";

const rootReducers = {
  auth: authReducer,
  brands: brandReducer,
  location: locationReducer,
  system: systemReducer,
};
export default rootReducers;
