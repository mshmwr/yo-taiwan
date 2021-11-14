//完成leaflet串接地圖
//串接客運api
//顯示站牌點位

const BusSectionTab = document.querySelector(".block_tab_group");
const BusSectionbusRoute = document.querySelector(".btn_busroute_group");

// mymap.on("click", onMapClick);
function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = "97d02fd06420478d88420953949672d9";
  let AppKey = "Drr_SIFmp6S1JCED-Ij5LmAd1dY";
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}

//bus route map=======================================

const reqData = function (url) {
  return axios.get(url, {
    headers: getAuthorizationHeader(),
  });
};
//fetch shape of Taiwan trip api
//axios--------------------------
const reqBusInfo = function (busName) {
  //reqBusName
  reqData(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip/${busName}?$format=JSON`
  )
    .then(function (res) {
      const busId = !res.data[0].RouteUID ? "" : res.data[0].RouteUID;
      if (busId === "") console.log("無該公車路線");
      //reqBusRoute
      return reqData(
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
          const loc = busRouteData.Geometry.slice(11, -1)
            .split(",")
            .map((loc) => loc.split())
            .map((locxy) =>
              locxy[0]
                .split(" ")
                .reverse()
                .map((val) => Number(val))
            );
          renderMap(loc, loc[Math.round(loc.length / 2)]);
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const renderMap = function (loc, view) {
  let mymap = L.map("map").setView(view, 12);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiZWxzYTI3MDAiLCJhIjoiY2t2cXFjdmVqOGhzZDMxcXdnZjVjN3Z2ZiJ9.v1URgFZJDg6nNZ5nj5VgXQ",
    }
  ).addTo(mymap);

  let geojsonFeature = {
    name: "busRoute",
    geometry: {
      type: "Line",
      coordinates: loc,
    },
  };
  L.polyline(geojsonFeature.geometry.coordinates).addTo(mymap);
};

const renderMapMenu = function (city) {
  const htmlTab = `        
  <div class="block_tab_selected">北部</div>
  <div class="block_tab_default">中部</div>
  <div class="block_tab_default">南部</div>
  <div class="block_tab_default">東部</div>
  <div class="block_tab_default">離島</div>`;
  BusSectionTab.insertAdjacentHTML("beforeend", htmlTab);
  reqData(
    "https://ptx.transportdata.tw/MOTC/v2/Tourism/Bus/Route/TaiwanTrip?$format=JSON"
  ).then((res) => {
    const districtBusRoute = res.data
      .filter((route) => route.City === city)
      .map((name) => name.TaiwanTripName.Zh_tw);
    console.log(districtBusRoute);
    const htmlRouteName = districtBusRoute
      .map((tripName) => {
        return `<div class="btn_busroute_default">${tripName}</div>`;
      })
      .join(" ");
    BusSectionbusRoute.insertAdjacentHTML("beforeend", htmlRouteName);
  });
};
renderMapMenu("Taoyuan");
reqBusInfo("雲林草嶺線(周三~周日運行)");
// reqBusInfo("濱海奇基線");
