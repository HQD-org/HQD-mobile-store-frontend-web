import { storage } from "../../common/config/firebase";
import { changeLoading } from "../../redux/actions/System/systemAction";
import { generateString } from "./helper";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export const uploadImagesToFirebase = (images = [], folder) => {
  return async (dispatch) => {
    dispatch(loading(true));
    const result = await Promise.all(
      images.map(async (image) => {
        return await upload(image, folder);
      })
    );
    dispatch(loading());
    return result.length > 1 ? result : result[0];
  };
};

export const upload = async (image, folder) => {
  if (!(image instanceof File)) return image.preview;
  const storageRef = storage.ref(`${folder}`);
  const name = generateString(24, true);
  const fileRef = storageRef.child(name + "-" + Date.now() + "-" + image.name);
  await fileRef.put(image);
  return await fileRef.getDownloadURL();
};
