import axiosClient from "./axiosClientLocation";

const url = "/api";

const getProvince = async () => {
  try {
    const res = await axiosClient.get(`${url}/province`);
    return res ? { data: res, success: true } : { success: false };
  } catch (error) {
    return {
      success: false,
    };
  }
};

const getDistrict = async (idProvince) => {
  try {
    const res = await axiosClient.get(`${url}/province/${idProvince}/district`);
    return res ? { data: res, success: true } : { success: false };
  } catch (error) {
    return {
      success: false,
    };
  }
};

const getVillage = async (idDistrict) => {
  try {
    const res = await axiosClient.get(`${url}/district/${idDistrict}/village`);
    console.log(`log at: => Location.Api.js => func getVillage => res: `, res);
    return res ? { data: res, success: true } : { success: false };
  } catch (error) {
    return {
      success: false,
    };
  }
};

const Location = { getProvince, getDistrict, getVillage };

export default Location;
