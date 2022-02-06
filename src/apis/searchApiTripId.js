import axios from "axios";
import { getAuthorizationHeader } from "../utils/axios";
const doSearchTripId = async (Id) => {
  let res = null;
  console.log(Id);
  try {
    await axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ID eq '${Id}'`,
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
  console.log(res);

  return res;
};

export { doSearchTripId };
