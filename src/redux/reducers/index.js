import authReducer from "./Auth/authReducers";
import brandReducer from "./Brand/brandReducers";
import locationReducer from "./Location/locationReducers";
import modelReducer from "./Model/modelReducers";
import systemReducer from "./System/systemReducers";

const rootReducers = {
  auth: authReducer,
  brand: brandReducer,
  location: locationReducer,
  model: modelReducer,
  system: systemReducer,
};
export default rootReducers;
