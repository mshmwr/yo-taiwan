import jsSHA from "jssha";
import axios from "axios";

async function ptxFetcher(url, data = {}) {
  let paramStr = "";
  const config = {
    headers: getAuthorizationHeader(),
  };
  Object.keys(data).forEach((key) => {
    paramStr += key + "=" + data[key].toString() + "&";
  });
  paramStr += "$format=JSON";
  const ptxUrl = url + "?" + paramStr;
  return fetcher(ptxUrl, config);
}

async function fetcher(url, config = {}) {
  let res = null;
  try {
    await axios
      .get(url, config)
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

export { fetcher, ptxFetcher };
