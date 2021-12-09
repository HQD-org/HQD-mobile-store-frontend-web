import authReducer from "./Auth/authReducers";
import branchReducer from "./Branch/branchReducers";
import brandReducer from "./Brand/brandReducers";
import cartReducer from "./Cart/cartReducers";
import locationReducer from "./Location/locationReducers";
import modelReducer from "./Model/modelReducers";
import orderReducer from "./Order/orderReducers";
import productReducer from "./Product/productReducers";
import systemReducer from "./System/systemReducers";
import userReducer from "./User/userReducers";

const rootReducers = {
  auth: authReducer,
  branch: branchReducer,
  brand: brandReducer,
  cart: cartReducer,
  location: locationReducer,
  model: modelReducer,
  order: orderReducer,
  product: productReducer,
  system: systemReducer,
  user: userReducer,
};
export default rootReducers;
