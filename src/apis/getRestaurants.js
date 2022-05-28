import axios from "axios";
import { getAuthorizationHeader } from "@utils/axios";

const getRestaurants = async (startIndex = 0, top = 5, city = "") => {
  let res = null;
  try {
    await axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${city}?%24top=${top}&%24skip=${startIndex}&%24format=JSON`,
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
}

export default getRestaurants;
