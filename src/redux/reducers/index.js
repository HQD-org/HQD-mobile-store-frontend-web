import authReducer from "./Auth/authReducers";
import brandReducer from "./Brand/brandReducers";
import locationReducer from "./Location/locationReducers";
import modelReducer from "./Model/modelReducers";
import systemReducer from "./System/systemReducers";
import userReducer from "./User/userReducers";

const rootReducers = {
  auth: authReducer,
  brand: brandReducer,
  location: locationReducer,
  model: modelReducer,
  system: systemReducer,
  user: userReducer,
};
export default rootReducers;
