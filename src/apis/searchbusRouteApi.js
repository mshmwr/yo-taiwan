import axios from "axios";
import { getAuthorizationHeader } from "@utils/axios";
const doBusRouteSearch = async (busName = "") => {
  let res = null;
  try {
    await getBusRoutePromise(busName)
      .then(function (response) {
        res = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    alert("GET Error!!" + error);
  }
  return res;
};

const getBusRoutePromise = async (busName = "") => {
  return axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip/${busName}?$format=JSON`,
    {
      headers: getAuthorizationHeader(),
    }
  );
};

export { doBusRouteSearch, getBusRoutePromise };
