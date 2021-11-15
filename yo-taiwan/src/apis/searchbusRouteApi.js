import axios from "axios";
import { getAuthorizationHeader } from "./axios";
const doBusRouteSearch = async (busName = "") => {
  let res = null;
  try {
    await axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip/${busName}?$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      )
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

export { doBusRouteSearch };
