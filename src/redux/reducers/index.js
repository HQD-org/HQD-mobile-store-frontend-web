import authReducer from "./Auth/authReducers";
import branchReducer from "./Branch/branchReducers";
import brandReducer from "./Brand/brandReducers";
import locationReducer from "./Location/locationReducers";
import modelReducer from "./Model/modelReducers";
import productReducer from "./Product/productReducers";
import systemReducer from "./System/systemReducers";
import userReducer from "./User/userReducers";

const rootReducers = {
  auth: authReducer,
  branch: branchReducer,
  brand: brandReducer,
  location: locationReducer,
  model: modelReducer,
  product: productReducer,
  system: systemReducer,
  user: userReducer,
};
export default rootReducers;
