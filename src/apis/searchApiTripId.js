import axios from "axios";
import { getAuthorizationHeader } from "../utils/axios";
const doSearchTripId = async (Id) => {
  let res = null;

  try {
    await axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ScenicSpotID eq '${Id}'`,
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

export { doSearchTripId };
