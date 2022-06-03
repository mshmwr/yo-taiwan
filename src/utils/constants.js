export const PLUS_SYMBOL = "+";
export const ANY_CITY = "不分縣市";
export const URL_ROOT = "https://ptx.transportdata.tw/MOTC/v2";
export const URL_TOURISM = "Tourism";
export const DISTRICT_DATA_FROM_MOTC = [
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
