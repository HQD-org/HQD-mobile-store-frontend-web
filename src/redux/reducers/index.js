import authReducer from "./Auth/authReducers";
import locationReducer from "./Location/locationReducers";
import systemReducer from "./System/systemReducers";

const rootReducers = {
  auth: authReducer,
  location: locationReducer,
  system: systemReducer,
};
export default rootReducers;
