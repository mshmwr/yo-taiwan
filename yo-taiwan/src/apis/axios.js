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

export { getAuthorizationHeader };
