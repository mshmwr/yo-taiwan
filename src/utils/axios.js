import jsSHA from "jssha";

function getAuthorizationHeader() {
  let AppID = "5e4b77429e454f49b7274b7d8e350869";
  let AppKey = "NwQdbxBGO9-0kTRcUWWVzlgfYaY";
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

const DistrictDatafromMOTC = [
  { region: "不分縣市", cities: [] },
  {
    region: "北部",
    cities: [
      ["宜蘭", "YilanCounty"],
      ["基隆", "Keelung"],
      ["臺北", "Taipei"],
      ["新北", "NewTaipei"],
      ["桃園", "Taoyuan"],
      ["新竹", "Hsinchu"],
    ],
  },
  {
    region: "中部",
    cities: [
      ["臺中", "Taichung"],
      ["苗栗", "MiaoliCounty"],
      ["彰化", "ChanghuaCounty"],
      ["南投", "NantouCounty"],
      ["雲林", "YunlinCounty"],
    ],
  },
  {
    region: "南部",
    cities: [
      ["高雄", "Kaohsiung"],
      ["臺南", "Tainan"],
      ["嘉義", "ChiayiCounty"],
      ["屏東", "PingtungCounty"],
    ],
  },
  {
    region: "東部",
    cities: [
      ["花蓮", "HualienCounty"],
      ["臺東", "TaitungCounty"],
    ],
  },
  {
    region: "離島",
    cities: [
      ["澎湖", "PenghuCounty"],
      ["金門", "KinmenCounty"],
      ["連江", "LienchiangCounty"],
    ],
  },
];

export { getAuthorizationHeader, DistrictDatafromMOTC };
