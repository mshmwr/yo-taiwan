import axios from "axios";
import { getAuthorizationHeader } from "../utils/axios";

const getRestaurantAll = async () => {
  let res = null;
  try {
    await axios
      .get(
        "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=30&%24format=JSON",
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

const getRestaurant = async (startIndex = 0, top = 5) => {
  let res = null;
  try {
    await axios
      .get(
        // `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=${top}&%24skip=${startIndex}&%24format=JSON`,
        "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=5&%24skip=1&%24format=JSON",
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then(function (response) {
        res = response.data;
        console.log("res:", res);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    alert("GET Error!!" + error);
  }
  return res;
};

export { getRestaurant, getRestaurantAll };
