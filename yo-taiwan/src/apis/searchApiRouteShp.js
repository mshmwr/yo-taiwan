import axios from "axios";
import { getAuthorizationHeader } from "./axios";
const doBusRouteShp = async (busName = "") => {
  let resresult = null;
  try {
    await axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip/${busName}?$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then(function (res) {
        const busId = !res.data[0].RouteUID ? "" : res.data[0].RouteUID;
        if (busId === "") console.log("無該路線");
        //reqBusRoute
        return axios
          .get(
            "https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Shape/TaiwanTrip?$format=JSON"
          )
          .then(function (res) {
            const busRouteData = res.data.find(
              (route) => route.RouteUID === busId
            );
            if (!busRouteData) {
              console.log("未找到該路線圖");
              return;
            }
            resresult = busRouteData.Geometry.slice(11, -1)
              .split(",")
              .map((loc) => loc.split())
              .map((locxy) =>
                locxy[0]
                  .split(" ")
                  .reverse()
                  .map((val) => Number(val))
              );
            return resresult;
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    alert("GET Error!!" + error);
  }

  return resresult;
};

export { doBusRouteShp };
