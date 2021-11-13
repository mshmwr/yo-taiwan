import axios from "axios";
import { getAuthorizationHeader } from "./axios";
const doSearch = async () => {
  let res = null;
  try {
    await axios
      .get(
        "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=contains(Address%2C%20'%E8%8A%B1%E8%93%AE')&$top=30&$format=JSON",
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

export { doSearch };
